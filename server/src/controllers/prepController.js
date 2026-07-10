const axios = require('axios');
const Analysis = require('../models/Analysis');
const PrepPlan = require('../models/PrepPlan');

// @desc    Generate a Prep Plan based on Analysis
// @route   POST /api/prep/generate
// @access  Private
const generatePlan = async (req, res) => {
  const { analysisId, duration = 5 } = req.body;

  if (!analysisId) {
    res.status(400);
    throw new Error('Please provide an analysisId');
  }

  try {
    // 1. Fetch Analysis
    const analysis = await Analysis.findById(analysisId);
    if (!analysis) {
      res.status(404);
      throw new Error('Analysis not found');
    }

    if (analysis.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized to access this analysis');
    }

    const missingSkills = analysis.missingSkills || [];
    
    // If no missing skills, we can generate a generic plan or return early
    const skillsText = missingSkills.length > 0 
      ? missingSkills.join(', ') 
      : 'General technical interview prep for ' + analysis.jobTitle;

    // 2. Construct Prompt
    const systemPrompt = `
You are an expert technical career coach. Your task is to generate a ${duration}-day study curriculum for a candidate to prepare for an interview.
The candidate needs to focus on learning and improving the following skills/topics: ${skillsText}.

For each day, provide a focus topic, a list of actionable study tasks, and a list of specific search terms they can use on Google or YouTube to find tutorials. DO NOT provide specific URLs as they might be broken, only provide exact search terms or names of official documentation.

Output the response STRICTLY as a JSON object with the following schema:
{
  "curriculum": [
    {
      "day": Number,
      "focus": "String (Topic of the day)",
      "tasks": ["String (Task 1)", "String (Task 2)"],
      "resources": ["String (Search term 1)", "String (Search term 2)"]
    }
  ]
}
Do not include any markdown formatting, backticks, or other text outside the JSON object. Just the raw JSON.
`;

    // 3. Call Local Llama 3.2
    const ollamaUrl = process.env.OLLAMA_API_URL || 'http://localhost:11434/api/generate';
    
    const llmResponse = await axios.post(ollamaUrl, {
      model: 'llama3.2',
      prompt: systemPrompt,
      format: 'json',
      stream: false,
    });

    const llmText = llmResponse.data.response;
    
    let parsedData;
    try {
      parsedData = JSON.parse(llmText.trim());
    } catch (err) {
      console.error("Failed to parse LLM JSON:", llmText);
      throw new Error('AI returned an invalid response format.');
    }

    // 4. Save to Database
    const prepPlan = await PrepPlan.create({
      userId: req.user._id,
      analysisId: analysisId,
      duration: duration,
      curriculum: parsedData.curriculum || [],
    });

    res.status(201).json(prepPlan);

  } catch (error) {
    console.error(error);
    res.status(500);
    throw new Error(error.message || 'Error generating prep plan');
  }
};

// @desc    Get a Prep Plan by ID
// @route   GET /api/prep/:id
// @access  Private
const getPlan = async (req, res) => {
  try {
    const plan = await PrepPlan.findOne({ _id: req.params.id, userId: req.user._id });
    if (!plan) {
      return res.status(404).json({ message: 'Prep plan not found' });
    }
    res.status(200).json(plan);
  } catch (error) {
    console.error('Get prep plan error:', error);
    res.status(500).json({ message: 'Server error fetching prep plan', error: error.message });
  }
};

// @desc    Get Prep Plan by Analysis ID
// @route   GET /api/prep/analysis/:analysisId
// @access  Private
const getPlanByAnalysis = async (req, res) => {
  try {
    const plan = await PrepPlan.findOne({ analysisId: req.params.analysisId, userId: req.user._id });
    if (!plan) {
      return res.status(404).json({ message: 'Prep plan not found for this analysis' });
    }
    res.status(200).json(plan);
  } catch (error) {
    console.error('Get prep plan error:', error);
    res.status(500).json({ message: 'Server error fetching prep plan', error: error.message });
  }
};

module.exports = {
  generatePlan,
  getPlan,
  getPlanByAnalysis
};

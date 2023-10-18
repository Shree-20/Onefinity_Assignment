const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Set the desired port

// Initialize the Google Cloud Speech-to-Text client
const { SpeechClient } = require('@google-cloud/speech');
const speechClient = new SpeechClient();

app.use(express.json());

// Start recording route
app.post('/api/startRecording', async (req, res) => {
  // Implement the code to start recording and store audio (not shown here)
  // You can use libraries like "record" for audio recording

  // Respond with a success message
  res.status(200).json({ message: 'Recording started' });
});

// Stop recording and transcribe route
app.post('/api/stopRecording', async (req, res) => {
  // Implement code to stop recording and transcribe the audio
  // This involves processing the recorded audio and using Google Cloud Speech-to-Text API

  // Example using Google Cloud Speech-to-Text
  const audioBytes = req.body.audioBytes; // Audio data in bytes

  const [response] = await speechClient.recognize({
    audio: {
      content: audioBytes,
    },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    },
  });

  const transcribedText = response.results
    .map(result => result.alternatives[0].transcript)
    .join('');

  // Respond with the transcribed text
  res.status(200).json({ transcribedText });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

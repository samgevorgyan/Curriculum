/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response eddddddddddto ${data}`;
  console.log('from worker', );
  postMessage(response);
});

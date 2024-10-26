// AI QNA
async function getResponseFromLLM(){
    try{
    const inputRef = document.querySelector("input.userQuery");
    const query = inputRef.value;
            //used to clear input
            inputRef.value = "";
            // for aading question
            const qDiv = document.createElement("div");
         qDiv.innerHTML = `
         <p>${query}</p>
         `;
         container.appendChild(qDiv);//adds response
 const apiBody = {
 contents: [
      {
     parts: [
      {
            text: `Context: ${qna}`, // Use Q&A 
 },
          {
            text: `
            You are a Skin Consultant. You can only responds skin related questions with effective advices.Don't give answers to unrelated queries. 
                      
            `,
 },
 {
    text: `User query: ${query}`, // Replaces the previous query with new one.
   },
     ],
        },
              ],
};
'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCRFAwdEI8mToxXKhiA-1eliLLbSViGjlk',
{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(apiBody),// convert data into string
}


const newDiv = document.createElement("div");
newDiv.innerHTML = `
<p>${responseText}</p>
`;
container.appendChild(newDiv);

// Pushing to QNA Array
qna.push({
Question: query,
LLMResponse: responseText,
});

document.documentElement.scrollTo({
top: document.documentElement.scrollHeight,
behavior: "smooth",
});
} catch (err) {
console.log(err);
alert("Error while generating response");
}
}
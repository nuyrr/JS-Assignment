// DOM Manipulation code
const elementRef = document.querySelectorAll(".element");
elementRef.forEach(element =>{
element.addEventListener('click',()=>{
    element.classList.toggle('highlight');
});
});
//Toggle Paragraph

    const Paragraph= document.getElementById('Paragraph');
    const togglebutton= document.getElementById('togglebutton');

togglebutton.addEventListener('click',()=>{
    if (Paragraph.style.disply==='none' || Paragraph.style.display ===''){
        Paragraph.style.display = 'block'; 
    }else{
          Paragraph.style.display='none';
    }
}
);
// Input Form
const form = document.getElementById("userForm");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
form.addEventListener("submit", function(event) {
              event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    displayName.textContent = name;
    displayEmail.textContent = email;
}); 
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
'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY',
{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(apiBody),
}



const data = await res.json();
const responseText = data["candidates"][0].content["parts"][0].text;

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
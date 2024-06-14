function sendMail(){
  var params={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value,
  };

const serviceID="service_pph8fng"
const templateID="template_3m8n8qk"
emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("name").value =""
    document.getElementById("email").value =""
    document.getElementById("message").value =""
    console.log(res);
alert("your message sent successfully ")
  })
  .catch((err)=>{
    console.log(err);
    alert("Please Try Again");
  }
  
);
  
}




 const text = document.getElementById("content")

 const textLoad = () => {
   setTimeout(() => {
     text.textContent = "Freelancer"
   }, 0);
   setTimeout(() => {
     text.textContent = "Full Stack Developer"
   }, 4000);
   setTimeout(() => {
     text.textContent = "Django  Developer"
   }, 8000);
   setTimeout(() => {
    text.textContent = "UI/UX Designer"
   }, 12000);
   setTimeout(() => {
    text.textContent = "Teaching"
   }, 14000);
 }

 textLoad();
 setInterval(textLoad, 15000)



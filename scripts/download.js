const resume_btn1 = document.querySelector("#resume-button-1");
const resume_btn2 = document.querySelector("#resume-button-2");

// resume_btn1.addEventListener("click", download);
// resume_btn2.addEventListener("click", download);

// function download() {
//   window.open(
//     "https://drive.google.com/file/d/1PVo0XgJQCZwOPfndmpMkW-Wxav3Z7Ql4/view?usp=share_link",
//     "_blank"
//   );
// }

resume_btn1.addEventListener("click", download);
resume_btn2.addEventListener("click", download);

// resume_btn2.addEventListener("click",()=>{
//   window.location.assign("https://drive.google.com/file/d/1PVo0XgJQCZwOPfndmpMkW-Wxav3Z7Ql4/view?usp=share_link", "_blank");
// })

function download(){
  // window.location.assign("https://drive.google.com/file/d/1PVo0XgJQCZwOPfndmpMkW-Wxav3Z7Ql4/view?usp=share_link");
  window.open(
        "https://drive.google.com/file/d/1PVo0XgJQCZwOPfndmpMkW-Wxav3Z7Ql4/view?usp=share_link",
        "_blank"
      );
}
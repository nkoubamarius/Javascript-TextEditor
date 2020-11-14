/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
const updateText=()=>{
    let textInput=document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = textInput;
  }
  
  /**
   * Toggle the bold class for the output text
   * HINT: Use the onclick function insite HTML
   * HINT: Look into using this keyword
   * HINT: Use the classList property
   * HINT: Toggle .active class for the button
   */
  const makeBold=(elem)=>{
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');

  }
  
  /**
   * Toggle the italic class for the output text
   */
  const makeItalic=(elem)=>{
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
  }
  
  /**
   * Toggle the underline class for the output text
   * HINT: Toggle the .active class for the button
   * HINT: Use the classList property
   * HINT: Use contains, remove, and add functions
   */
  const makeUnderline=(elem)=>{
    elem.classList.toggle('active');

    let formattedText=document.getElementById('text-output');
    if(formattedText.classList.contains('underline')){
      formattedText.classList.remove('underline');
    }else{
      formattedText.classList.add('underline');
    }
  }
  
  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
   * HINT: Use the style property of the element
   * HINT: Make sure to untoggle the active state for all other align buttons
   */
  const alignText=(elem, alignType)=>{
    //elem.classList.toggle('active');

    document.getElementById('text-output').style.textAlign=alignType;

    let buttonsList=document.getElementsByClassName('align');
    for(let button of buttonsList){
      button.classList.remove('active');
    }
    
    // for(let i=0; i<buttonsList.length; i++){
    //   buttonsList[i].classList.remove('active');
    // }
    elem.classList.toggle('active');
  }
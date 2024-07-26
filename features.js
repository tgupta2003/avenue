//JSON -> all of the information about mentors stored

//This stores the titles like: "All Mentors", "Senior Mentors", "Graduated Mentors "
let pageTitleElement;

//Display with a grid layout 
let outputGridElement;

//Used to display each person's content as if it were a new page.
let mentorDisplayElement;


//JSON -> THE DATA WE ARE STORING 
//THE id is what goes in the url: file:///Users/trishagupta/Desktop/JSON2/index.html?section=item&id=science
//ex: id=science


//ITEM TITLE = NAME 
let mentorCollection = [

    //Isabella M.
  {

    "name": "Isabella Mandis",
    "subhead": "Founder of Girls Into VC, Harvard",

    "category":'VC',
    
    //what each page is:
    "id" : "isabellamandis",
    //content on this page for the person: 

    //INFORMATION DISPLAYED
    "description" : "Isabella Mandis, a rising junior at Harvard University, exemplifies student excellence beyond academics. Her efforts to increase female representation in entrepreneurship and venture capital demonstrate her commitment to meaningful change.\n\n\n Starting Out: \n\nFrom a young age, Isabella has been driven by a desire to make a positive impact on the world around her. While she enjoyed school, she often found herself seeking additional challenges outside the classroom. This led her to learn coding and work with startups during her high school years which carried onto college. Interestingly, Isabella's entrepreneurial spirit was evident from a young age. As a child, her dream job was to become the CEO of Apple. \"I was obsessed with Steve Jobs and Apple,\" she recalls. \"I would beg my parents to take me to the Apple Store after school just to stand in the building and hold the phones.\" It all makes sense! Today, she has a powerful mission: bringing more women into entrepreneurship and venture capital.\n\n\n Girls Into VC:\n\nIsabella's crowning achievement thus far is the creation of Girls Into VC, a fellowship program designed to support and empower women in the fields of entrepreneurship and venture capital. When asked about what she's most proud of, Isabella doesn't hesitate to mention this initiative.\"Seeing the fellowship members in person was surreal,\" Isabella shares.  \"We've built such strong connections, even though much of our interaction has been remote.\" The program aims to provide resources, opportunities, and work experience to young women interested in venture. Moreover, it serves as a confidence booster, helping participants believe in their ability to succeed in traditionally male-dominated industries.\n\n\n Balancing it All: \n\nOne of the most impressive aspects of Isabella's journey is her ability to balance a rigorous academic workload with her numerous extracurricular activities. Her advice? \"The most important thing to realize is that you truly can't do everything, and you have to be okay with it,\" Isabella advises. She is also obsessed with her calendar and time blocking to help manage her time - even if it means scribbling in time for meals with friends.\n\n\n Advice For Young Women: \n\n Isabella offers some valuable advice, she recommends starting something – whether it's a blog, a newsletter, or a small project and don't be afraid to reach out to people you admire. You never know who you will get a response from. Running Girls Into VC has given Isabella a new appreciation for the challenges of leadership. \"Society often puts founders on a pedestal,\" she notes.She emphasizes that with this experience she is able to empathize more with founders.\n\n\n Isabella remains an inspiration, proving that with passion, dedication, and a willingness to take risks, it's possible to make a significant impact even while still in school.\n\n\n"
    , 
    "takeaways" : "A Girls-Into-VC Revolution",
   


    //preview image
    "image" : "media/feature-pics/isabella.jpg",

    //images for grid
    "images": [
      "media/feature-pics/isabella1.png",
      "media/feature-pics/isabella2.png",
      "media/feature-pics/isabella3.png",
      "media/feature-pics/isabella4.png",
    ]

    
  },
   //Sophia D. 
   {

    "name": "Sophia Domonoske",

    "subhead": "CS & Skating, NYU",

    "category":'CS',
    
    //what each page is:
    "id" : "sophiad",
    //content on this page for the person: 

    //INFORMATION DISPLAYED
    "description" : "Sophia Domonoske, a rising junior at New York University, exemplifies the art of balancing academics with extracurricular passions. She’s a double major in Computer Science and Global Liberal Studies and has been figure skating for 16 years.\n\n\n Skating Journey: \n\n After a two-year break, Sophia rediscovered her love for skating upon joining the NYU figure skating community. \"Meeting the community at NYU really helped me start to love it again,\" she shares.\n\n\n Balancing it All: \n\n Balancing a rigorous academic schedule with competitive figure skating requires effective time management. Sophia's approach involves 1) setting specific times for different activities throughout the day, 2) creating distinct mental and physical spaces for each pursuit.\n\n \"In the morning, I'm skating - fully focused on skating,\" Sophia explains. \"Then I get back home and switch to a school mindset.\" \n\n For students feeling overwhelmed about getting involved in extracurriculars, Sophia suggests: 1) go with a friend or reach out to someone new in your class 2) look at clubs and try to connect with at least one other person - coffee chats are an easy way to meet someone.\n\n\n Drones & Other Academic Pursuits: \n\n  While figure skating is significant, Sophia's academic interests lie in computer science. She's eyeing an accelerated BA/MA program in CS and gaining practical experience through internships, currently working for a Utah-based startup coding autopilots for drones. Sophia emphasizes the importance of adaptability: \"Know the outcome and be okay with it, or be willing to change or introduce something new into your process,\" she advises.\n\n\n Inspirations:\n\n Sophia credits her sister, currently in medical school, as a significant influence and source of inspiration. Looking to the future, Sophia aspires to leave a positive impression on those around her. \"I want to always be there for other people and have a positive impact on people in my community,\" she says.\n\n\n Sophia's journey reminds us that success isn't just about achievements, but also about finding joy, building meaningful connections, and continuously adapting to new challenges.\n\n\n", 
    "takeaways" : "On & Off The Rink ",

    //preview image
    "image" : "media/feature-pics/sophia2.png",

    //images for grid
    "images": [
      "media/feature-pics/s4.png",
      "media/feature-pics/s2.png",
    ]

    
  },

//next feature
  
];



//DEPENDING ON CATEGORY THE FOLLOWING APPEARS: 
//loads JS 
document.addEventListener("DOMContentLoaded", function(){


   //DEFINE THE PAGE TITLE AND THE DIV GRID THAT WILL BE UPDATED AND FILLED 
  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  mentorDisplayElement = document.getElementById("mentorDisplay");

  //PARTS OF THE URL THAT WILL BE USED TO IDENTIFY THE PAGE WE ARE ON 
  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString); 

  //IN THE URL GET SECTION TO SEE IF ITEM ON PAGE OR NOT
  let urlSection = urlParams.get('section');
  //GET ID 
  let urlID = urlParams.get('id'); 

   //IF THE "section = " PART OF URL HAS SOMETHING OTHER THAN "item" DISPLAY AS A GRID W/ PREVIEWS OF OTHER PROJECTS 
  if (urlSection != "item") { /* Display project previews in grid */

  //IF YOU WANT TO DISPLAY ALL PROJECTS RELATING TO juniors&seniors, DISPLAY IN GRID
    /* Set page title if we are in a specific section */
    if (urlSection == "juniorsseniors") {
      pageTitleElement.innerText = "Junior & Senior Mentors:";
    }

    //IF YOU WANT TO DISPLAY ALL PROJECTS RELATING TO GRADS, DISPLAY IN GRID
    else if (urlSection == "graduates") {
      pageTitleElement.innerText = "Graduate Mentors:";
    }

    //GET EVERY CATEGORY - "category" FROM JSON -> "portfolioCollection" 
    //LOOP THROUGH EVERY SECTION IN DATABASE AND DISPLAY IF CATEGORY MATCHES URLSECTION 
    //THESE ARE THE CONTENT YOU WILL DISPLAY THUMBNAILS FOR 
    /* Create thumbnails for matching category, or all */
    for(let i = 0; i < mentorCollection.length; i++){
    	if(mentorCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
    		//CALL THIS FUNCTION TO CREATE THUMBNAILS 
    		createMentorPreview(mentorCollection[i]); 
    	}
    }


  }

  //IF URLSECTION DOES EQUAL TO ITEM, DISPLAY THE INDIVIDUAL PAGE
  //INSTEAD OF USING URLSECTION USE "id" TO DIFFERENTIATE WHAT TO DISPLAY
  else{
    /* Display individual project by trying to match the "ID" value */
  	for(let x = 0; x < mentorCollection.length; x++){
  		if(mentorCollection[x]["id"] == urlID){
  			createMentorPage(mentorCollection[x]); 
  		}
  	}

  }

}); 





//CREATE/ DISPLAY THUMBNAILS 
//this function takes a JSON object as input, extracts relevant information 
//(title, image, and id), creates an HTML structure for  a mentor thumbnail,
//and appends it to a grid layout for display on a web page.
// let newPreviewLink; 
function createMentorPreview(incomingJSON){

	//NEW ELEMENT <a> tag -> creates link for individual img
	//WHATS IN THE JSON AND APPLYING IT 
	let newPreviewLink = document.createElement("A"); 
	//Attatching ID to last part of the link created
	newPreviewLink.href = "features.html?section=item&id=" + incomingJSON["id"];

	//DIV THAT HOLDS IMG AND HEADING FOR THUMBNAIL 
	let newPreviewElement = document.createElement("DIV"); 
	newPreviewLink.appendChild(newPreviewElement); 

	//PREVIEW TITLE TEXT FOR THUMBNAIL
    //APPENDS THE TITLE TO DIV ELEMENT 
    let newPreviewTitle = document.createElement("P"); 
    newPreviewTitle.classList.add("previewTitle"); 
    newPreviewTitle.innerText = incomingJSON["name"]; 
    newPreviewElement.appendChild(newPreviewTitle);
    
    let newPreviewHead = document.createElement("P"); 
    newPreviewHead.classList.add("previewHead"); 
    newPreviewHead.innerText = incomingJSON["subhead"]; 
    newPreviewElement.appendChild(newPreviewHead); 



   //THE IMG FOR THE THUMBNAIL 
   //APPENDS THE IMG TO DIV ELEMENT
    let newPreviewThumbnail = document.createElement("IMG"); 
    newPreviewThumbnail.classList.add("thumbnail");
    //from the mentorCollection: 
    newPreviewThumbnail.src = incomingJSON["image"]; 
    newPreviewElement.appendChild(newPreviewThumbnail); 


    //EVERYTHING DISPLAYED IN GRID LAYOUT WHICH IF CLICKED OPENS UP THE LINK FOR EACH MENTOR 
    //ANCHOR ELEMENT WITH ALL THE THUMBNAIL CONTENT IS APPENDED TO ELEMENT 
    outputGridElement.appendChild(newPreviewLink);

}


//CREATING/ DISPLAYING PAGES 
//This function takes a JSON object as input, extracts relevant information 
//(title, image, and description), creates an HTML structure for  a mentor section/page,
//and appends it to a grid layout for display on a web page.

function createMentorPage(incomingJSON){

	//GETTING ITEM TITLE 
	pageTitleElement.innerText = incomingJSON["name"]; 
  pageTitleElement.classList.add("name"); 

	//DIV THAT HOLDS INFO FOR A PARTICULAR TOPIC/SECTION 
	let newMentorElement = document.createElement("DIV"); 

  // Create the grid container
  let gridContainer = document.createElement("DIV");
  gridContainer.classList.add("image-grid");

  // Assuming incomingJSON has an array of image URLs under 'images'
  let images = incomingJSON["images"];
  images.forEach((imageURL) => {
    let imgElement = document.createElement("IMG");
    imgElement.src = imageURL;
    imgElement.classList.add("grid-image");
    gridContainer.appendChild(imgElement);
  });

  // Append the grid container to the newMentorElement
  newMentorElement.appendChild(gridContainer);

  // Append the newMentorElement to the body or another container
  document.body.appendChild(newMentorElement);



   let descriptionHeadline1 = document.createElement("H2");
   //descriptionHeadline1.innerText = "Takeaways:";
   descriptionHeadline1.innerText =  incomingJSON["takeaways"]; 
   descriptionHeadline1.classList.add("takeaway-h"); 
   newMentorElement.appendChild(descriptionHeadline1);


  //content
  let descriptionHeadline = document.createElement("H2");
  descriptionHeadline.classList.add("reflection"); 
  newMentorElement.appendChild(descriptionHeadline);

  //descriptions
	let newMentorInformation = document.createElement("P"); 
	newMentorInformation.classList.add("description"); 
	newMentorInformation.innerText =  incomingJSON["description"]; 
	newMentorElement.appendChild(newMentorInformation); 


  //DISPLAY THE ENTIRE SECTION -> APPEND THE DIV WITH ALL ELEMENTS FROM PAGE TO OVERALL 
  //MENTOR DIV 
  mentorDisplayElement.appendChild(newMentorElement);


}








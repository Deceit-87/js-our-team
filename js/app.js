const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


//   console.log(team[0].name,team[0].role,team[0].image)
//   console.log(team.length)
  const CONTAINER = document.querySelector('.team-container')
  CONTAINER.style.justifyContent = 'start'
  CONTAINER.style.margin = '0 auto'
  for (let i = 0; i < team.length; i++) {

      console.log(team[i].name,team[i].role)
      CONTAINER.innerHTML += ` <div class="team-card">
      <div class="card-image">
        <img
          src="./img/${team[i].image}"
          alt=${team[i].name}
      </div>
      <div class="card-text">
        <h3>${team[i].name}</h3>
        <p>${team[i].role}</p>
      </div>
    </div>`

    const teamCard = document.querySelectorAll(".team-card")
   
    teamCard[i].style.marginRight = '0'
    teamCard[i].style.flexBasis = 'calc(100% / 3 )'
    teamCard[i].style.padding = '10px'
    console.log(teamCard[i]) 
      
  }


//   const userName = document.getElementById('name').value
//   const userRole = document.getElementById('role').value
//   const userImg = document.getElementById('image').value
  const Add = document.getElementById('addMemberButton')

  

//   console.log(userName,userRole,userImg)


const userName = document.getElementById('name').value
const userRole = document.getElementById('role').value
const userImg = document.getElementById('image').value



  function newMember(uName,uRole,uImg){

    return {

        name: uName,
        role: uRole,
        img: uImg
 }

  }

  const AddMember = newMember(userName,userRole,userImg)
  console.log(AddMember)

  

 




  












//   <div class="team-card">
//   <div class="card-image">
//     <img
//       src="img/wayne-barnett-founder-ceo.jpg"
//       alt="Wayne Barnett"
//     >
//   </div>
//   <div class="card-text">
//     <h3>Wayne Barnett</h3>
//     <p>Founder & CEO</p>
//   </div>
// </div>
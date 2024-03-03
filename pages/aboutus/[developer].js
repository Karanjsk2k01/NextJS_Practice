import { useRouter } from 'next/router';

function developer() {
  
  let router = useRouter();
  
  let parameterValue = router.query.developer;
  
  let details = [
    { id: 1, name: 'Karan', role: 'Senior Developer' },
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'}, 
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
  ]
  
  let selectedDeveloper = details.find(dev => dev.id === parseInt(parameterValue));
  
  

  return (

    <div>
      {selectedDeveloper ? (
        <div  style={{padding:'20px'}}>
          <h1>{selectedDeveloper.name}</h1>
          <p>Role: {selectedDeveloper.role}</p>
        </div>
      ) :
        <div  style={{padding:'20px'}}>
          <h1>Developer doesn't exist</h1>
          <p>UnAuthorised URL detect</p>
        </div>

      }
    </div>
    

  )
};

export default developer;
import Link from 'next/link';

function aboutus() {
  let details = [
    { id: 1, name: 'Karan'},
    { id: 2, name: 'Vaibhav'},
    { id: 3, name: 'Suresh'}
  ];
  
  return (

    <div style={{padding:'20px'}}>
      <h1>AboutUS</h1>
        {
          details.map((item) =>{return (
            <ul>
              <li key={item.id}>
                <Link href={`/aboutus/${item.id}`}>
                 {item.name}
                </Link>
              </li>
            </ul>
        )})
      }

    </div>    

  )
};

export default aboutus;
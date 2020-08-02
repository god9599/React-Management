import React, { Component } from 'react';
import './App.css';
import Customer from './Components/Customer';

const customers = [{
  'id':1,
  'image':"https://placeimg.com/64/64/1",
  'name':'주성민',
  'birthday':'970227',
  'gender':'남자',
  'job':'student'
},
{
  'id':2,
  'image':"https://placeimg.com/64/64/2",
  'name':'홍길동',
  'birthday':'960221',
  'gender':'남자',
  'job':'model'
},
{  
  'id':3,
  'image':"https://placeimg.com/64/64/3",
  'name':'장발장',
  'birthday':'910217',
  'gender':'남자',
  'job':'professor'
}]


class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            )
          })
        }
      </div>
    );
  }
}

export default App;

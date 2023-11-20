import './App.css';
import User from './components/User';
import Card from './components/Card';

const data=[{
  title:"A changing World Order",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, recusandae.",
  date:"August 2",
  timeInMin:2,
  views:102,
  type:'musing'
},
{
  title:"Indian vs Australin",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, recusandae.",
  date:"January 21",
  timeInMin:5,
  views:156,
  type:'thought'
},
{
  title:"Write to build",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, recusandae.",
  date:"June 27",
  timeInMin:6,
  views:500,
  type:'thought'
}]

function App() {
  return (
    <>
    <div className='coverPhoto'></div>
    <User />
    <button className='button'>134 Post</button>
    {data.map((item)=><Card item={item}/>)}
    
    </>
  );
}

export default App;

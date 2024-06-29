import { useSetRecoilState } from "recoil"
import { Open } from "../recoil/atom/show"


const Dashboard = () => {
  const setCurrentComponent = useSetRecoilState<string>(Open)
  const handleGroup = ()=>{
    setCurrentComponent('group')
  }
  return (
    <div className="flex flex-col">
        <p>Member1</p>
        <p>Member1</p>
        <p>Member1</p>
        <p>Member1</p>
        <p>Member1</p>
        <p>Member1</p>
        <p>Member1</p>
        <button onClick={handleGroup}>Group</button>
    </div>
  )
}

export default Dashboard

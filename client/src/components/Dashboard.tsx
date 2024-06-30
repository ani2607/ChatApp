import { useSetRecoilState } from "recoil"
import { Open } from "../recoil/atom/show"
import { CurrentComponent } from "../types/typeUtils"

// icons
import { IoSearchOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { data,groups } from "../data";


const Dashboard = () => {
  const setCurrentComponent = useSetRecoilState<CurrentComponent|null>(Open)
  const handleGroup = ()=>{
    setCurrentComponent(CurrentComponent.Group)
  }


  // fetch request for the friends of particular user
  const getUserData = async()=>{
    // get the user data
  }

 
  return (
    <div className="flex flex-col">
        
        <div className="flex flex-row justify-center items-center mt-4 bg-gray-500 gap-x-2  ml-3 rounded  w-[250px]">
          <span><IoSearchOutline size={25}/></span>
          <input type="text" placeholder="search name/email" className="p-1 outline-none bg-gray-500" />
        </div>
        <div className="directmessages mt-7 ml-2">
          <div className="heading flex justify-around gap-x-24  border-b-[1px] border-b-gray-700">
          <h1>DIRECT MESSAGES</h1>
          <GoPlus size={25} />

          </div>
        <div className="user">
          {
            data.map((user,index)=>{
              return <>
                <div key={index} className="flex mt-1 bg-gray-800 p-13  ml-2 gap-x-3 mb-2">
                  <img src={user.avatar_url} alt="image" className="rounded-full w-7 h-7" />
                  <span>{user.username}</span>
                </div>
              </>
            })
          }
        </div>
        </div>

        <div className="groups mt-1d">

        <div className="heading flex justify-between   border-b-[1px] border-b-gray-700">
          <h1 className="ml-3">GROUPS</h1>
          <GoPlus className="cursor-pointer mr-1" onClick={handleGroup}  size={25} />
          </div>

        </div>

        <div className="group w-full">
          {
            groups.map((group,index)=>{
              return <>
                <div onClick={handleGroup}  key={index} className="flex mt-1  cursor-pointer p-1 hover:bg-gray-900 w-full   ml-6 gap-x-1 mb-2">
                  <p>#</p>
                  <span>{group.group_name}</span>
                </div>
              </>
            })
          }
        </div>

        
        {/* <button onClick={handleGroup}>Group</button> */}
    </div>
  )
}

export default Dashboard

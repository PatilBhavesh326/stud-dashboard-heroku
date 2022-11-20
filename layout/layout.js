
import styles from '../styles/Layout.module.css';


export default function Layout( { children }){
    return (
        <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-slate-50 rounded-md w-2/5 grid lg:grid-col">
                <div className=" flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
  
        </div>
    )
}
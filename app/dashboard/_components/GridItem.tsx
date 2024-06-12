
const GridItem = ({ title, children }: any) => {
    return (
        <div className='flex flex-col justify-center items-center p-8 border border-slate-900 bg-slate-100 shadow-md rounded-xl h-[400px]'>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default GridItem;
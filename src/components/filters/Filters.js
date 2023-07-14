import "./filters.css"
export default function Filter(props){
    return(
        <div>
        <select 
        id="filterYear"
        value={props.selected}
        onChange={props.onChangeFilter}
        className="text-white bg-transparent 
        overflow-y-scroll  border-solid border-[1px] border-white rounded-lg p-2 m-2">
        <option value="0">All</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        </select>
        </div>
    )
}
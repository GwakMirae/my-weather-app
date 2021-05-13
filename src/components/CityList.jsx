
function CityList(props){
    // const cities = props.cities;
    const {cities} = props;
    var alpha = "A";
    var prev_alpha = "A";
    var list = "";
    var temp = "";
    return (
        <div>
            <h1>CityList</h1>
            
            <ul className="cityList">
                {cities.map((item, index) => {
                    alpha = item.charAt(0).toUpperCase();
                    
                    if (prev_alpha === alpha){
                        list = list + item +" / "
                        prev_alpha = alpha  
                    }
                    else{
                        temp = list;
                        list = item + " / "
                        prev_alpha = alpha
                        return <li key={index}>{temp}</li> 
                    }
                })}
                <li key={prev_alpha}>{list}</li>
            </ul>
        </div>
    )
}

export default CityList;
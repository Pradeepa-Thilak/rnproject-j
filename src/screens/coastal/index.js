import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi'; 
import ComponentWithImage_HeaderAndDescription from '../../section/ComponentWithImage_HeaderAndDescription';

const Coastal = () => {

    const [coastalData, setData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMicrositeData('coastal');
            if (data.msg === 'success')
                setData(data.results);
            else
                console.log("Message: Failure");
        }

        fetchData();
    }, []);

    console.log(coastalData);

    const sectionData = coastalData?.SectionDetails || [];

  return (
      <View>
          <ComponentWithImage_HeaderAndDescription details={sectionData[1]} />
      </View>
  )
}

export default Coastal
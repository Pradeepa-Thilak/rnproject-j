export const getMicrositeData = async (micrositeName) => {
  try {
    const response = await fetch(
      `https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=${micrositeName}&deviceType=mobile&shopId=26`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('API Error');
  }
};

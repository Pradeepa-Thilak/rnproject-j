const navigateToMicrosite = (slug, navigation) => {
  switch (slug) {
    case 'house-of-silver':
      navigation.navigate('Houseofsilver');
      break;

    case 'coastal':
      navigation.navigate('coastal');
      break;
    case 'eoss':
      navigation.navigate('EOSS');
      break;
    case 'corporategifts':
      navigation.navigate('Corporategifts');
      break;
    case 'the-saree-store':
      navigation.navigate('SareeStore');
      break;
    case 'corporategifting':
      navigation.navigate('Corporategifting');
      break;
    case 'springsummer':
      navigation.navigate('springsummerr');
      break;
    case 'springsummer2025':
      navigation.navigate('springsummer');
      break;
    case 'craft':
      navigation.navigate('craft');
      break;
    case 'newarrivals':
      navigation.navigate('newarrivals');
      break;
    case 'wedding-season':
      navigation.navigate('weddingseason');
      break;
    case 'dokra':
      navigation.navigate('dokra');
      break;
    case 'the-gifting-edit':
      navigation.navigate('thegiftedit');
      break;
    // case 'house-of-silver':
    //   navigation.navigate('Houseofsilver');
    //   break;
    case 'house-of-fashion-jewelry':
      navigation.navigate('houseoffashionjewelry');
      break;
    case 'the-anju-modi-collection':
      navigation.navigate('theanjumodicollection');
      break;
    case 'utsav':
      navigation.navigate('utsav');
      break;

    default:
      console.log('Microsite not found');
  }
};

export const handleNavigation = (a_link, navigation) => {
  if (!a_link) return;

  const parts = a_link.split('/');

  const type = parts[1]; // m or c
  const slug = parts[2]; // house-of-silver or sale

  switch (type) {
    case 'm':
      navigateToMicrosite(slug, navigation);
      break;

    case 'c':
      navigation.navigate('PLP', {
        category: slug,
      });
      break;

    case 'b':
      navigation.navigate('PLP', {
        category: slug,
      });
      break;

    default:
      console.log('Unknown navigation type');
  }
};

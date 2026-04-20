import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { stylesPro as styles } from '../screens/PDP/PDP_style';
import { Icon } from 'react-native-paper';

const ProductDetails = ({ product, selectedSize }) => {
  const [detailOpen, setDetail] = useState(null);
  const [readMore, setReadMore] = useState('Read More');
  const words = product.Name.split(' ');

  return (
    <View style={styles.ProductDisplayWhole}>
      <View style={styles.ProductDisplayHead}>
        <Pressable
          style={styles.ProductDisplayButton}
          onPress={() =>
            detailOpen !== 'detail' ? setDetail('detail') : setDetail(null)
          }
        >
          <Text style={styles.ProductDisplayHeadTxt}>Product Details</Text>
          {detailOpen === 'detail' ? (
            <Icon source={'chevron-up'} size={24} />
          ) : (
            <Icon source={'chevron-down'} size={24} />
          )}
        </Pressable>
        {detailOpen === 'detail' && (
          <View style={styles.paddingRight}>
            <Text style={styles.ProductDes}>{product.ShortDescription}</Text>
            {product.Features?.TopStyle && (
              <View style={styles.ProductDet}>
                <Text style={styles.ProductDetHead}>Top Style</Text>
                <Text style={styles.ProductDetValue}>
                  {product.Features.TopStyle}
                </Text>
              </View>
            )}
            {product.Features?.TopLength && (
              <View style={styles.ProductDet}>
                <Text style={styles.ProductDetHead}>Top Length</Text>
                <Text style={styles.ProductDetValue}>
                  {product.Features.TopLength}
                </Text>
              </View>
            )}
            {product.Features?.TopClosure && (
              <View style={styles.ProductDet}>
                <Text style={styles.ProductDetHead}>Top Closure</Text>
                <Text style={styles.ProductDetValue}>
                  {product.Features.TopClosure}
                </Text>
              </View>
            )}
            {product.Features?.TopHemline && (
              <View style={styles.ProductDet}>
                <Text style={styles.ProductDetHead}>Top Hemline</Text>
                <Text style={styles.ProductDetValue}>
                  {product.Features.TopHemline}
                </Text>
              </View>
            )}
            {product.Features?.TopPattern && (
              <View style={styles.ProductDet}>
                <Text style={styles.ProductDetHead}>Top Pattern</Text>
                <Text style={styles.ProductDetValue}>
                  {product.Features.TopPattern}
                </Text>
              </View>
            )}
            {readMore === 'Read Less' && (
              <View>
                <View style={styles.divider}></View>
                <View style={styles.ReadMoreBox}>
                  {product.Features?.TopMaterial && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Top Material</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.TopMaterial}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Ornamentation && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Ornamentation</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Ornamentation}
                      </Text>
                    </View>
                  )}
                  {product.Features?.BottomMaterial && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Bottom Material</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.BottomMaterial}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Craft && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Craft</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Craft}
                      </Text>
                    </View>
                  )}
                  {product.Features?.ReturnDays && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Return Days</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.ReturnDays}
                      </Text>
                    </View>
                  )}
                  {product.Features?.CODavailable && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>COD Available</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.CODavailable}
                      </Text>
                    </View>
                  )}
                  {product.Features?.DispatchDays && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Dispatch Days</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.DispatchDays}
                      </Text>
                    </View>
                  )}
                  {product.Features?.ProductMaterail && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>
                        Product Material
                      </Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.ProductMaterial}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Color && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Color</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Color}
                      </Text>
                    </View>
                  )}
                  {product.Features?.BottomOpening && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Bottom Opening</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.BottomOpening}
                      </Text>
                    </View>
                  )}
                  {product.Features?.BottomPattern && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Bottom Pattern</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.BottomPattern}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Dupatta && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Dupatta</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Dupatta}
                      </Text>
                    </View>
                  )}
                  {product.Features?.ShipsWorldWide && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Ships Worldwide</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.ShipsWorldWide}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Occasion && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Occasion</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Occasion}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Length && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Length</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Length}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Neck && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Neck</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Neck}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Pockets && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Pockets</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Pockets}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Lining && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Lining</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Lining}
                      </Text>
                    </View>
                  )}
                  {/* care */}
                  {product.Features?.Closure && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Closure</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Closure}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Collection && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Collection</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Collection}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Fit && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Fit</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Fit}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Pattern && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Pattern</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Pattern}
                      </Text>
                    </View>
                  )}
                  {product.Features?.BottomType && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Bottom Type</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.BottomType}
                      </Text>
                    </View>
                  )}
                  {product.Features?.SleeveLength && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Sleeve Length</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.SleeveLength}
                      </Text>
                    </View>
                  )}
                  {product.Features?.Style && (
                    <View style={styles.ProductDet}>
                      <Text style={styles.ProductDetHead}>Style</Text>
                      <Text style={styles.ProductDetValue}>
                        {product.Features.Style}
                      </Text>
                    </View>
                  )}
                  {/* Disclaimer */}
                  <View style={styles.ProductDet}>
                    <Text style={styles.ProductDetHead}>Product Code</Text>
                    <Text style={styles.ProductDetValue}>
                      {selectedSize.Reference.split('_')[0]}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            <Text
              style={styles.ReadMore}
              onPress={() =>
                readMore !== 'Read More'
                  ? setReadMore('Read More')
                  : setReadMore('Read Less')
              }
            >
              {readMore}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.ProductDisplayHead}>
        <Pressable
          style={styles.ProductDisplayButton}
          onPress={() =>
            detailOpen !== 'disclosure'
              ? setDetail('disclosure')
              : setDetail(null)
          }
        >
          <Text style={styles.ProductDisplayHeadTxt}>Product Disclosure</Text>
          {detailOpen === 'disclosure' ? (
            <Icon source={'chevron-up'} size={24} />
          ) : (
            <Icon source={'chevron-down'} size={24} />
          )}
        </Pressable>
        {detailOpen === 'disclosure' && (
          <View style={styles.ReadMoreBox}>
            <View style={styles.ProductDet}>
              <Text style={styles.ProductDetHead}>Product Type</Text>
              <Text style={styles.ProductDetValue}>
                {words.includes('&')
                  ? words.slice(-4).join(' ')
                  : words.slice(-3).join(' ')}
              </Text>
            </View>
            <View style={styles.ProductDet}>
              <Text style={styles.ProductDetHead}>
                MRP (Inclusive of all taxes)
              </Text>
              <Text style={styles.ProductDetValue}>
                &#8377;{' '}
                {Number(product.Price).toLocaleString('en-IN', {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}{' '}
                (inclusive of taxes and excluding of all discounts)
              </Text>
            </View>
            <View style={styles.ProductDet}>
              <Text style={styles.ProductDetHead}>Net Quantity</Text>
              <Text style={styles.ProductDetValue}>{product.Quantity} N</Text>
            </View>
            <View style={styles.ProductDet}>
              <Text style={styles.ProductDetHead}>
                Month and Year of Manufacture
              </Text>
              <Text style={styles.ProductDetValue}>
                {product.MonthAndYearOfManufacturer}
              </Text>
            </View>
            <View style={styles.ProductDet}>
              <Text style={styles.ProductDetHead}>Country of Origin</Text>
              <Text style={styles.ProductDetValue}>India</Text>
            </View>
            <View style={styles.ProductDet}>
              <Text style={styles.ProductDetHead}>Packed By</Text>
              <Text style={styles.ProductDetValue}>
                Jaypore E-Commerce Private Limited Plot No. 19, Sector-140
                Noida-201305,Uttar Pradesh
              </Text>
            </View>
            <View style={styles.ProductDet}>
              <Text style={styles.ProductDetHead}>Marketed By</Text>
              <Text style={styles.ProductDetValue}>
                Jaypore E-Commerce Private Limited, 665, Pace City II, Sector
                37, Gurugram, Haryana - 122002
              </Text>
            </View>
            <View style={styles.ProductDet}>
              <Text style={styles.ProductDetHead}>Customer Care Details</Text>
              <Text style={styles.ProductDetValue}>
                {product.CustomerCareDetails}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProductDetails;

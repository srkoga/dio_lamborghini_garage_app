import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";

import { styles } from "./styles";

import Logo from "../../../assets/logo.png";
import { CAR_ASSETS_BASE_URL } from "../../constants/cars.ts";
import { Divider } from "../Divider";
import { BuyButton } from "../BuyButton";


import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";
import { CarModel } from "./props";

export default function CardView(){

    const [carData, setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        (async () => {
        await loadCarData(6, setCarData);
        })();
    }, []);

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={Logo}/>
        </View>
    );

    const renderCarDetails = () => (
        <View style={{ alignItems: "center" }}>
        <Text style={styles.carBrand}>Lamborghini - {carData?.releaseYear}</Text>
        <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    );

    const renderCarImage = () => (
        <Image
        style={styles.image}
        source={{
            uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
        }}
        />
    );

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
        <Button
            title="<"
            color={"#01A6B3"}
            onPress={() => handlePreviousItem(carData, setCarData)}
        />
        <Text style={styles.priceLabel}> {carData?.price}</Text>
        <Button
            title=">"
            color={"#01A6B3"}
            onPress={() => handleNextItem(carData, setCarData)}
        />
        </View>
    );

  return (
    <View style={styles.imageContainer}>       
       {renderLogoBox()}

       <Divider/>
       {renderCarDetails()}
       {renderCarImage()}

       <Divider/>
       <BuyButton/> 
       {renderPriceControls()}
    </View>
  );
}
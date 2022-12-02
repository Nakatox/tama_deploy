import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    Alert,
    Image,
    ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Tamagotchi from "../../Components/Shared/Tamagotchi";
import { Accelerometer } from "expo-sensors";
import { Foods, FoodType } from "../../Fixtures/food";
import {
    TamagotchiContext,
    TamagotchiContextType,
} from "../../Providers/TamagochiProvider";
import { UserContext, UserContextType } from "../../Providers/UserProvider";
import BalaceButton from "../../Components/Shared/BalaceButton";
import moment from "moment";

export default function HomeScreen() {
    const [feed, setFeed] = useState(false);
    const [strenght, setStrenght] = useState(false);
    const [intelligence, setIntelligence] = useState(false);
    const [useStrength, setUseStrength] = useState(false);
    const [showStrength, setShowStrength] = useState(false);
    const [useIntelligence, setUseIntelligence] = useState(false);
    const [showIntelligence, setShowIntelligence] = useState(false);

    
    const { tamagotchi, strengthTamagotchi, intelligenceTamagotchi, sendToWork } = useContext(
        TamagotchiContext
        ) as TamagotchiContextType;
    const [currentImage, setCurrentImage] = useState(
        tamagotchi.id === 1
        ? require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")
        : tamagotchi.id === 2
        ? require("../../../assets/tamagotchi/tamagotchi_2_stand_1.png")
        : tamagotchi.id === 3
        ? require("../../../assets/tamagotchi/tamagotchi_3_stand_1.png")
        : null
        );
        console.log("oui", tamagotchi);
        

    const { feedTamagotchi } = useContext(
        TamagotchiContext
    ) as TamagotchiContextType;

    const { user, setUser } = useContext(UserContext) as UserContextType;

    const navigation = useNavigation();

    function generateRandomNumberBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const animationInterogation = () => {
        setCurrentImage(
            require("../../../assets/tamagotchi/tamagotchi_1_interogation_1.png")
        );
        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")
            );
        }, 1500);
    };

    const animationLongPress = () => {
        setCurrentImage(
            require("../../../assets/tamagotchi/tamagotchi_1_press_1.png")
        );
        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_press_2.png")
            );
        }, 500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_press_3.png")
            );
        }, 1000);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_press_4.png")
            );
        }, 1500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")
            );
        }, 3000);
    };

    const animationFeed = () => {
        setCurrentImage(
            require("../../../assets/tamagotchi/tamagotchi_1_eat_1.png")
        );
        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_eat_2.png")
            );
        }, 500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_eat_1.png")
            );
        }, 1000);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_eat_2.png")
            );
        }, 1500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_eat_1.png")
            );
        }, 2000);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_eat_2.png")
            );
        }, 2500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")
            );
        }, 3000);
    };

    const animationStrength = () => {
        setCurrentImage(
            require("../../../assets/tamagotchi/tamagotchi_1_force_1.png")
        );
        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_force_2.png")
            );
        }, 500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_force_1.png")
            );
        }, 1000);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_force_2.png")
            );
        }, 1500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_force_1.png")
            );
        }, 2000);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_force_2.png")
            );
        }, 2500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")
            );
        }, 3000);
    };

    const animationIntelligence = () => {
        setCurrentImage(
            require("../../../assets/tamagotchi/tamagotchi_1_intelligence_1.png")
        );
        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_intelligence_2.png")
            );
        }, 500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_intelligence_1.png")
            );
        }, 1000);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_intelligence_2.png")
            );
        }, 1500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_intelligence_1.png")
            );
        }, 2000);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_intelligence_2.png")
            );
        }, 2500);

        setTimeout(() => {
            setCurrentImage(
                require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")
            );
        }, 3000);
    };

    return (
        <ImageBackground
            source={require("../../../assets/background.png")}
            style={{
                flex: 1,
            }}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: 50,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Pressable
                        style={{
                            width: 80,
                            height: 80,
                            backgroundColor: "#F5EBB3",
                            justifyContent: "center",
                            alignItems: "center",
                            borderBottomEndRadius: 25,
                        }}
                        onPress={() => {
                            console.log(tamagotchi);
                            
                                if (tamagotchi !== null) {
                                    navigation.navigate("Details", {
                                        tamagotchiParam: tamagotchi,
                                    })
                                }
                            }
                        }
                    >
                        <Image
                            source={require("../../../assets/head.png")}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </Pressable>
                    <BalaceButton />
                    <Pressable
                        style={{
                            width: 80,
                            height: 80,
                            backgroundColor: "#F5EBB3",
                            justifyContent: "center",
                            alignItems: "center",
                            borderBottomStartRadius: 25,
                        }}
                        onPress={() => {
                            navigation.navigate("Market");
                        }}
                    >
                        <Image
                            source={require("../../../assets/market.png")}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </Pressable>
                </View>

                <Pressable
                    style={{
                        height: hp("30%"),
                        width: wp("100%"),
                        position: "absolute",
                        zIndex: 2,
                        borderRadius: 50,
                        top: hp("50%"),
                        left: wp("20%"),
                    }}
                    onPress={() => {
                        if (useStrength) {
                            strengthTamagotchi();
                            setShowStrength(true);
                            setTimeout(() => {
                                setShowStrength(false);
                            }, 1000);
                        } else if (useIntelligence) {
                            intelligenceTamagotchi();
                            setShowIntelligence(true);
                            setTimeout(() => {
                                setShowIntelligence(false);
                            }, 1000);
                        } else {
                            animationInterogation();
                        }
                    }}
                    onLongPress={() => {
                        animationLongPress();
                    }}
                >
                        <Image
                            source={currentImage}
                            style={{
                                width: 200,
                                height: "100%",
                                resizeMode: "contain",
                            }}
                        />
                    {showStrength && (
                        <Text
                            style={{
                                height: hp("10%"),
                                width: wp("20%"),
                                position: "absolute",
                                color: "white",
                                fontSize: 20,
                                zIndex: 2,
                                left: wp(generateRandomNumberBetween(0, 80)),
                                top: hp(generateRandomNumberBetween(0, 10)),
                            }}
                        >
                            +1 strength
                        </Text>
                    )}

                    {showIntelligence && (
                        <Text
                            style={{
                                height: hp("10%"),
                                width: wp("20%"),
                                position: "absolute",
                                zIndex: 2,
                                left: wp(generateRandomNumberBetween(0, 80)),
                                top: hp(generateRandomNumberBetween(0, 10)),
                            }}
                        >
                            +1 intelligence
                        </Text>
                    )}
                </Pressable>

                <View
                    style={{
                        height: hp("10%"),
                        width: wp("100%"),
                        position: "absolute",
                        zIndex: 1,
                        top: hp("85%"),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 20,
                    }}
                >
                    <Pressable
                        onPress={() => {
                            setFeed(!feed);
                        }}
                        style={{
                            width: 70,
                            height: 70,
                            backgroundColor: "#F5EBB3",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 50,
                        }}
                    >
                        <Image
                            source={require("../../../assets/food.png")}
                            style={{
                                width: 70,
                                height: 40,
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFeed(false);
                            setIntelligence(!intelligence);
                        }}
                        style={{
                            width: 70,
                            height: 70,
                            backgroundColor: "#F5EBB3",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 50,
                        }}
                    >
                        <Image
                            source={require("../../../assets/lunettes.png")}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </Pressable>
                    <Pressable
                        style={{
                            width: 70,
                            height: 70,
                            backgroundColor: "#F5EBB3",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 50,
                        }}
                        onPress={() => {
                            setStrenght(!strenght);
                        }}
                    >
                        <Image
                            source={require("../../../assets/force.png")}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </Pressable>
                    <Pressable
                        style={{
                            width: 70,
                            height: 70,
                            backgroundColor: "#F5EBB3",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 50,
                        }}
                        onPress={() => {
                            navigation.navigate("InventoryStack");
                        }}
                    >
                        <Image
                            source={require("../../../assets/inventory.png")}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </Pressable>
                </View>
                <Pressable
                        style={{
                            width: 70,
                            height: 70,
                            position: "absolute",
                            top: hp("76%"),
                            left: wp("76.8%"),
                            backgroundColor: "#F5EBB3",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 50,
                        }}
                        onPress={() => {
                            navigation.navigate("Settings");
                        }}
                    >
                        <Image
                            source={require("../../../assets/settings.png")}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </Pressable>
            </SafeAreaView>

            {feed && (
                <View
                    style={{
                        position: "absolute",
                        bottom: hp("15%"),
                        left: 0,
                        height: hp("10%"),
                        zIndex: 3,
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    {Foods.map((food) => (
                        <Pressable
                            key={food.id}
                            onPress={() => {
                                setFeed(false);
                            }}
                            style={{
                                width: 50,
                                height: 50,
                                backgroundColor: "#F5EBB3",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 50,
                            }}
                        >
                            <Pressable
                                onPress={() => {
                                    feedTamagotchi(food);
                                    animationFeed();
                                    setFeed(false);
                                }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "#F5EBB3",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 50,
                                }}
                            >
                                <Text>{food.name}</Text>
                            </Pressable>
                        </Pressable>
                    ))}
                </View>
            )}
            {strenght && (
                <View
                    style={{
                        position: "absolute",
                        bottom: hp("15%"),
                        left: 140,
                        height: hp("10%"),
                        zIndex: 3,
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    {new Date(user.lastTimeTamagotchiStrenght).getTime() <
                    Date.now() - 60000 ? 
                        <Pressable
                            style={{
                                width: 80,
                                height: 50,
                                backgroundColor: "#F5EBB3",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 50,
                            }}
                            onPress={() => {
                                setStrenght(false);
                                setFeed(false);
                                setIntelligence(false);
                                animationStrength();
                                setUseStrength(true);
                                setTimeout(() => {
                                    setUseStrength(false);
                                }, 5000);

                                setUser({
                                    ...user,
                                    lastTimeTamagotchiStrenght:
                                        moment().toString(),
                                });
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                }}
                            >Entrainer</Text>
                        </Pressable>
                    : <Pressable
                            style={{
                                width: 80,
                                height: 50,
                                backgroundColor: "#919191",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 50,
                            }}
                        >
                            <Text>Entrainer</Text>
                        </Pressable>
                    }
                    {new Date(user.lastTimeTamagotchiWorked).getTime() < Date.now() - 60000
                    ?
                    <Pressable
                    style={{    
                        width: 80,
                        height: 50,
                        backgroundColor: "#F5EBB3",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 50,
                    }}
                    onPress={() => {
                        setUser({
                                    ...user,
                                    token: user.token + 10 + tamagotchi.strength,
                                    lastTimeTamagotchiWorked: moment().toString(),
                                });
                                setIntelligence(false);
                                //animationWork();

                    }}
                    >
                        <Text>Travailler</Text>
                    </Pressable>
                    :<Pressable
                    style={{
                        width: 80,
                        height: 50,
                        backgroundColor: "#919191",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 50,
                    }}
                    >
                        <Text>Travailler</Text>
                    </Pressable>
                    }
                </View>
        )}
                    

             {intelligence && (
                 <View
                     style={{
                         position: "absolute",
                         bottom: hp("15%"),
                         left: 75,
                         height: hp("10%"),
                         zIndex: 3,
                         justifyContent: "space-between",
                         alignItems: "center",
                         flexDirection: "row",
                     }}
                 >
                     {new Date(user.lastTimeTamagotchiIntelligence).getTime() <
                     Date.now() - 60000 ? (
                         <Pressable
                             style={{
                                 width: 80,
                                 height: 50,
                                 backgroundColor: "#F5EBB3",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 borderRadius: 50,
                             }}
                             onPress={() => {
                                 setIntelligence(false);
                                 animationIntelligence();
                                 setUseIntelligence(true);
                                 setTimeout(() => {
                                     setUseIntelligence(false);
                                 }, 5000);

                                 setUser({
                                     ...user,
                                     lastTimeTamagotchiIntelligence:
                                         moment().toString(),
                                 });
                             }}
                         >
                             <Text>Entrainer</Text>
                         </Pressable>
                     ) : (
                         <Pressable
                             style={{
                                 width: 80,
                                 height: 50,
                                 backgroundColor: "#919191",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 borderRadius: 50,
                             }}
                         >
                             <Text>Entrainer</Text>
                         </Pressable>
                     )}
                     {new Date(user.lastTimeTamagotchiWorked).getTime() < Date.now() - 60000
                    ?
                    <Pressable
                    style={{    
                        width: 80,
                        height: 50,
                        backgroundColor: "#F5EBB3",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 50,
                    }}
                    onPress={() => {
                        setUser({
                                    ...user,
                                    token: user.token + 10 + tamagotchi.intelligence,
                                    lastTimeTamagotchiWorked: moment().toString(),
                                });
                                setIntelligence(false);
                                //animationWork();

                    }}
                    >
                        <Text>Travailler</Text>
                    </Pressable>
                    :<Pressable
                    style={{
                        width: 80,
                        height: 50,
                        backgroundColor: "#919191",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 50,
                    }}
                    >
                        <Text>Travailler</Text>
                    </Pressable>
                    }
                 </View>
             )}
        </ImageBackground>
    );
}

interface FeedElementProps {
    food: FoodType;
    onPress: () => void;
}

function FeedElement({ food, onPress }: FeedElementProps) {
    const { feedTamagotchi } = useContext(
        TamagotchiContext
    ) as TamagotchiContextType;

    return (
        <Pressable
            style={{
                width: wp("20%"),
                height: hp("10%"),
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
            }}
            onPress={() => {
                feedTamagotchi(food);
                onPress();
            }}
        >
            <Text>{food.name}</Text>
        </Pressable>
    );
}

interface TabElementProps {
    image: string;
    onPress: () => void;
}
// function TabElement({ image, onPress }: TabElementProps) {

//     return (
//         <Pressable
//             onPress={onPress}
//             style={{
//                 width: 70,
//                 height: 70,
//                 backgroundColor: "#F5EBB3",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 50,
//             }}
//         >
//             <Image
//                 source={require(`${process.env.PUBLIC_URL}r/${image}.svg`)}
//                 style={{
//                     width: 50,
//                     height: 50,
//                 }}
//             />
//         </Pressable>
//     );
// }

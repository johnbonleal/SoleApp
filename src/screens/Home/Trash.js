import React, { Component } from 'react';
import { } from 'react-native';

export default class Trash extends Component {
    render() {
        return (
            <View>
                <Header title={"Home"} />
                <ScrollView>
                    <View style={{ padding: 16, marginTop: 54 }} >
                        <View style={styles.searchContainer}>
                            <View style={{ flex: 0, justifyContent: 'center' }}>
                                <Ionicons name={"ios-search"} size={20} color={"gray"} />
                            </View>
                            <TextInput
                                style={{ flex: 1, marginLeft: 8 }}
                                placeholder={"What do you want to do today?"}
                                returnKeyLabel={"Done"}
                            />
                            <View style={{ flex: 0, justifyContent: 'center' }}>
                                <Ionicons name={"ios-funnel"} size={20} color={"gray"} />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 16 }}>
                        <Swiper
                            autoplay
                            autoplayTimeout={3}
                            height={150}
                            showsPagination
                            showsButtons={sampleData.length === 1 ? false : true}
                            prevButton={<Text style={styles.buttonText}>‹</Text>}
                            nextButton={<Text style={styles.buttonText}>›</Text>}
                            dotColor={"rgba(250, 250, 250, 0.5)"}
                            activeDotColor={"#FFF"}
                        >
                            {sampleData.map((item, index) => (
                                <View style={{ flex: 1, borderRadius: 5, overflow: 'hidden' }}>
                                    <ImageBackground style={{ flex: 1, height: undefined, width: undefined, resizeMode: 'cover' }} source={images.image2} />
                                </View>
                            ))}
                        </Swiper>
                    </View>
                    <VerticalSpacer height={16} />
                    <List data={sampleData} title={"New Releases"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                    <VerticalSpacer height={16} />
                    <List data={sampleData} title={"Recommended"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                    <VerticalSpacer height={16} />
                    <List data={sampleData} title={"Top Deals"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                </ScrollView>

                <ImageBackground style={{ width: '100%', height: 150 }} source={images.image2} >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#FFF', fontSize: 20 }}>Good afternoon, <Text style={{ fontWeight: 'bold' }}>John Bon Leal</Text></Text>
                        </View>
                        <View style={{flex: 1}}>
                        <View style={{ width: '100%', height: 150, position: 'absolute', bottom: -75, zIndex: 10, paddingHorizontal: 16}}>
                            <View style={{ flex: 0, backgroundColor: '#FFF', padding: 16, elevation: 3, borderRadius: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Earned Points</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row', marginRight: 12 }}>
                                            <Text style={{ fontSize: 14, marginRight: 5 }}>PHP</Text>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0.00</Text>
                                        </View>
                                        <View style={{ flex: 0, alignSelf: 'center' }}>
                                            <Ionicons name={"ios-arrow-forward"} size={18} color={"gray"} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)', alignSelf: 'center', marginVertical: 16 }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{ height: 45, width: 45 }} source={images.app_icon}></Image>
                                        <Text>My Card</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{ height: 45, width: 45 }} source={images.app_icon}></Image>
                                        <Text>QR Code</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image style={{ height: 45, width: 45 }} source={images.app_icon}></Image>
                                        <Text>V-Rewards</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </View>
                    </ImageBackground>

            </View>
        )
    }
}
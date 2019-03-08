import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import {
    requestFetchRewards,
    requestFetchCategories,
    requestFetchMyRewards
} from '../../actions/RewardActions';
import { CircleList, RectangleList, RewardList } from '../../components';
import { NavigationService } from '../../configs';
import { CategoryData } from '../../utils/Data';

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

class ExploreRewards extends Component {
    componentDidMount() {
        const { requestFetchRewards, requestFetchCategories, requestFetchMyRewards, auth } = this.props;
        if (auth.data) {
            requestFetchRewards({
                access_token: auth.data.access_token
            });
            requestFetchCategories({
                access_token: auth.data.access_token
            });
            requestFetchMyRewards({
                access_token: auth.data.access_token
            });
        }
    }
    render() {
        const { auth, reward } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                >
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 16 }}>
                        <CircleList
                            data={CategoryData}
                            onPressItem={this._onPressItem}
                        />
                    </View>
                    <View style={{ backgroundColor: 'white', marginTop: 12 }}>
                        <RectangleList
                            data={sampleData}
                            title={"Featured Deals"}
                            isCollapsible
                            withIcon
                        />
                    </View>
                    {
                        (reward && reward.rewardsList.length > 0) &&
                        reward.rewardsList.map((reward) => (
                            <View key={`item-${reward.id}`} style={{ backgroundColor: 'white', marginTop: 12 }}>
                                <RewardList
                                    data={reward.items}
                                    title={reward.name}
                                    isCollapsible
                                    withIcon
                                />
                            </View>
                        ))
                    }
                    <View style={{ backgroundColor: 'white', justifyContent: 'center', padding: 16, marginTop: 12, marginBottom: 50 }}>
                        <TouchableOpacity style={{ borderColor: '#DBDBDB', borderWidth: 1, borderRadius: 8, padding: 8 }} onPress={this._onPressViewRewards}>
                            <Text style={{ textAlign: 'center' }}>View All Rewards</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: 'white', justifyContent: 'center', position: 'absolute', bottom: 0, left: 0, right: 0, elevation: 10, padding: 16 }}>
                    <Text>{auth.data && `${auth.data.points} Available Points`}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    reward: state.reward
});

const mapDispatchToProps = dispatch => ({
    requestFetchRewards: params => dispatch(requestFetchRewards(params)),
    requestFetchCategories: params => dispatch(requestFetchCategories(params)),
    requestFetchMyRewards: params => dispatch(requestFetchMyRewards(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreRewards);
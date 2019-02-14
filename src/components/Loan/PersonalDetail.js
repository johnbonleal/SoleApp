import React, { PureComponent } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import { Dropdown } from '..';
import { RoundedFields } from '.';
import { Constants } from '../../configs';
import { GenderData, MaritalStatusData } from '../../utils/Data';

class PersonalDetail extends PureComponent {
    state = {
        enableScrollViewScroll: true,
    }
    render() {
        const { enableScrollViewScroll } = this.state;
        const {
            onChangeValuePersonal,
            onChangeValueContact,
            personal,
            contact,
            parent
        } = this.props;
        return (
            <Animated.ScrollView
                ref={component => { this.scrollView = component }}
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                scrollEnabled={enableScrollViewScroll}
            >
                <RoundedFields
                    data={["First Name", "Middle Name", "Last Name"]}
                    value={personal}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValuePersonal}
                />
                <RoundedFields
                    data={["Birthdate"]}
                    value={contact}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValueContact}
                />
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <Dropdown
                        title={"Gender"}
                        onChangeValue={onChangeValuePersonal}
                        data={GenderData}
                        name={"gender"}
                        value={personal}
                        parent={parent}
                        style={{ flex: 1 }}
                    />
                    <View style={{ height: Constants.BUTTON_HEIGHT, width: 24 }} />
                    <Dropdown
                        title={"Marital Status"}
                        onChangeValue={onChangeValuePersonal}
                        data={MaritalStatusData}
                        name={"maritalStatus"}
                        value={personal}
                        parent={parent}
                        style={{ flex: 1 }}
                    />
                </View>
                <RoundedFields
                    data={["Mobile Number", "Alternate Contact Number", "Personal Email Address"]}
                    value={personal}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValuePersonal}
                />
                <RoundedFields
                    data={["Facebook Url"]}
                    value={contact}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValueContact}
                />
                <Text style={{ fontSize: 12, marginTop: 3 }}>* copy and paste the link of your profile page to this section</Text>
                <RoundedFields
                    data={["Address (Present)", "Address (Permanent)"]}
                    value={personal}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValuePersonal}
                />
            </Animated.ScrollView>
        );
    }
}

export default PersonalDetail;
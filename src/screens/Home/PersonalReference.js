import React, { PureComponent } from 'react';
import { View } from 'react-native';

import PersonalReferenceField from './PersonalReferenceField';

class PersonalReference extends PureComponent {
    render() {
        const {
            onChangeValue,
            value
        } = this.props;
        return (
            <View>
                <PersonalReferenceField
                    data={["Full Name", "Mobile Number"]}
                    title={"Reference 1"}
                    {...this.props}
                />
            </View>
        )
    }
}

export default PersonalReference;
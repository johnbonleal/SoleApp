import React, { PureComponent } from 'react';
import { View } from 'react-native';
import FieldComponent from './FieldComponent';

var _ = require('lodash');

class RoundedFields extends PureComponent {
    render() {
        const { data, style, value, onChangeValue, withDropdown } = this.props;
        return (
            <View style={style}>
                {data.length > 0 &&
                    data.map((item, index) => (
                        <FieldComponent
                            key={index}
                            item={item}
                            index={index}
                            length={data.length}
                            name={_.camelCase(item)}
                            value={value}
                            onChangeValue={onChangeValue}
                            withDropdown={withDropdown}
                        />
                    ))
                }
            </View>
        );
    }
}

export default RoundedFields;
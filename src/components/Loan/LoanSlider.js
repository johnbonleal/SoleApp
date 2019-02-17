import React from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';
import styles from '../../styles/LoanStyles';
import { numberFormat } from '../../utils/DataFormatter';

const LoanSlider = ({
    isAmount,
    title,
    value,
    minimumRange,
    maximumRange,
    step,
    onValueChange,
    style
}) => (
        <View style={style}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={styles.headerValue}>
                    <Text style={styles.value}>{isAmount ? `₱ ${numberFormat(value)}` : `${value} days`}</Text>
                </View>
            </View>
            <Slider
                onValueChange={(sliderValue) => onValueChange(sliderValue, isAmount)}
                step={step}
                value={value}
                minimumValue={minimumRange}
                maximumValue={maximumRange}
                trackStyle={styles.track}
                thumbStyle={styles.thumb}
                minimumTrackTintColor={"#E0E9E8"}
                style={styles.loanSlider}
            />
            <View style={styles.range}>
                <Text style={styles.sliderFieldText}>{isAmount ? `₱ ${numberFormat(minimumRange)}` : `${minimumRange} days`}</Text>
                <Text style={styles.sliderFieldText}>{isAmount ? `₱ ${numberFormat(maximumRange)}` : `${maximumRange} days`}</Text>
            </View>
        </View>
    );

export default LoanSlider;
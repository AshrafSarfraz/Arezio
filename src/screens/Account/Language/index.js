import { View, Text, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import CustomCheckbox from '../../../components/reuseables/CheckBox'


export const Language = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);

    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const handleToggleCheckbox1 = () => {
        setIsChecked1(!isChecked1);
    };

    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.Language}>
                    <Text style={styles.Language_Text}>English</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginHorizontal: "5%", marginTop: '2%' }}>
                        <TouchableOpacity onPress={handleToggleCheckbox} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={[styles.checkboxContainer, isChecked && styles.checkedCheckbox]}
                                onPress={handleToggleCheckbox}
                            >
                                {isChecked && <Text style={styles.checkmark}>✓</Text>}

                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Language}>
                    <Text style={styles.Language_Text}>German</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginHorizontal: "5%", marginTop: '2%' }}>
                        <TouchableOpacity onPress={handleToggleCheckbox1} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={[styles.checkboxContainer, isChecked1 && styles.checkedCheckbox]}
                                onPress={handleToggleCheckbox1}
                            >
                                {isChecked1 && <Text style={styles.checkmark}>✓</Text>}

                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}


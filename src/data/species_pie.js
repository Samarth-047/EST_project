const species_pie_data = {
    'Andaman': [342, 480, 530, 120, 250],
}

const species_pie_labels = {
    'Andaman': [1, 2, 3, 4, 5],
}

function SpeciesPieChartLabels(mangrove) {
    return species_pie_labels[mangrove];
}

function SpeciesPieChartData(mangrove) {
    return species_pie_data[mangrove];
}

module.exports = {
    SpeciesPieChartLabels,
    SpeciesPieChartData,
};
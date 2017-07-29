angular.module('ficticia')
    .config(function($mdThemingProvider) {
        $mdThemingProvider.definePalette('ficticiaPallete', {
            '50': 'A8385C',
            '100': 'A8385C',
            '200': 'A8385C',
            '300': 'A8385C',
            '400': 'A8385C',
            '500': 'A8385C',
            '600': 'A8385C',
            '700': 'A8385C',
            '800': 'A8385C',
            '900': 'A8385C',
            'A100': 'A8385C',
            'A200': 'A8385C',
            'A400': 'A8385C',
            'A700': 'A8385C',
            'contrastDefaultColor': 'light', // whether, by default, text (contrast)
            // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'
            ],
            'contrastLightColors': undefined // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('ficticiaPallete')
            .accentPalette('cyan'); //this is the original color 5FBDD7
            
        $mdThemingProvider.enableBrowserColor({
            theme: 'default', // Default is 'default'
        });
    });
// #b40a3d
// #b40a57
// #b81043

// #a92a50

// esta é a perfeita
// #9a2b4d


// parece  q é esta:
// #a53c5c

// o paint disse q e esta:
// rgb(168,56,92) converted to hex #A8385C

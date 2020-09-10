ymaps.ready(function () {
  var map = new ymaps.Map(
      "map",
      {
        center: [55.757957, 37.624534],
        zoom: 16,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      map.getCenter(),
      {
        hintContent: "г. Москва, ул. Никольская, д.10",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "img/map_marker.svg",
        // Размеры метки.
        iconImageSize: [61, 97],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -65],
      }
    );

  map.geoObjects.add(myPlacemark);
});
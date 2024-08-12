setTimeout(function () {
  var promotionMessage = document.createElement("div");
  promotionMessage.textContent =
    "Special Offer: Get 20% off your next purchase!";
  promotionMessage.className =
    "bg-green-500 text-white p-4 rounded-lg text-lg font-semibold";
  document.getElementById("message-container").appendChild(promotionMessage);
}, 3000);

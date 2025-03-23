"use client";

import React from "react";
import { useLanguageStore } from "@/store/languageStore";
import { navigationContent } from "@/content/navigation"; // Adjust the path as needed

const NavigationPage = () => {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; // Default to English

  // Fetch content based on the selected language, fallback to English
  const content = navigationContent[displayLanguage as keyof typeof navigationContent] || navigationContent.english;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">{content.title}</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.byAir.heading}</h2>
        <p>{content.byAir.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.byTrain.heading}</h2>
        <p className="mb-4">{content.byTrain.nearestStation}</p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">{content.byTrain.fromDelhi.heading}</h3>
          <ul className="list-disc pl-6">
            {content.byTrain.fromDelhi.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">{content.byTrain.toDelhi.heading}</h3>
          <ul className="list-disc pl-6">
            {content.byTrain.toDelhi.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.byRoad.heading}</h2>
        <p>{content.byRoad.description}</p>
        <ul className="list-disc pl-6">
          {content.byRoad.routes.map((route, index) => (
            <li key={index}>{route}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.locationMap.heading}</h2>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.3059112905344!2d77.739886376358!3d30.256863874817356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390edc614638511d%3A0xf5221b10df7e7f9a!2sShaktipeeth%20Shri%20Shakambhari%20devi%20ji%20temple%20Saharanpur!5e0!3m2!1sen!2sin!4v1740679853606!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default NavigationPage;
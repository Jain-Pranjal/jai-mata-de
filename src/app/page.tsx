import Image from "next/image"

export default function Home() {
  return (
    <div className="h-full bg-gradient-to-r from-[#141E30] to-[#243B55]">
      {/* Header Section */}
      <header className="container mx-auto pt-8 pb-4 text-center">
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          माता शाकम्भरी देवी, माँ भीमा देवी, भ्रामरी देवी और माता शताक्षी
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Image Section - Centered */}
        <div className="relative mx-auto my-8 flex justify-center">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-xl">
            <div className="transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/home.png"
              alt="जय माता दी"
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-contain w-full h-auto"
            />
            </div>
            </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto max-w-3xl space-y-4 pb-12 text-justify text-white">
          <p className="text-base leading-relaxed md:text-lg">
            ये मंदिर शक्तिपीठ है और यहां सती का शीश यानि सिर गिरा था । मंदिर में अंदर मुख्य प्रतिमा शाकुंभरी देवी के दाईं ओर भीमा और
            भ्रामरी और बायीं ओर शताक्षी देवी प्रतिष्ठित हैं । शताक्षी देवी को शीतला देवी के नाम से भी संबोधित किया जाता है ।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            कहते हैं कि शाकुंभरी देवी की उपासना करने वालो के घर शाक यानि कि भोजन से भरे रहते हैं शाकुंभरी देवी की कथा के अनुसार एक दैत्य
            जिसका नाम दुर्गम था उसने ब्रहमा जी से वरदान में चारो वेदो की प्राप्ति की और यह वर भी कि मुझसे युद्ध में कोई जीत ना सके वरदान
            पाकर वो निरंकुश हो गया तो सब देवता देवी की शरण में गये और उन्होने प्रार्थना की ।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            ऋषियो और देवो को इस तरह दुखी देखकर देवी ने अपने नेत्रो में जल भर लिया । उस जल से हजारो धाराऐं बहने लगी जिनसे सम्पूर्ण वृक्ष और
            वनस्पतियां हरी भरी हो गई । एक सौ नेत्रो द्धारा प्रजा की ओर दयापूर्ण दृष्टि से देखने के कारण देवी का नाम शताक्षी प्रसिद्ध हुआ ।
            इसी प्रकार जब सारे संसार मे वर्षा नही हुई और अकाल पड गया तो उस समय शताक्षी देवी ने अपने शरीर से उत्पन्न शाको यानि साग
            सब्जी से संसार का पालन किया । इस कारण पृथ्वी पर शाकंभरी नाम से विख्यात हुई ।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            माँ शाकम्भरी देवी के भवन से लगभग एक किमी पहले बाबा भूरादेव का मंदिर है। भूरादेव के प्रथम दर्शन कर यात्री आगे प्रस्थान करते हैं। आगे
            का मार्ग पथरीला है जो एक खोल से होकर जाता है। वर्षा ऋतु मे खोल मे पानी भी आ जाता है। तब यात्रा स्थगित कर देनी चाहिए
            क्योंकि पानी का बहाव अधिक होता है।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            थोड़ा आगे चलने पर माँ शाकम्भरी देवी प्रवेश द्वार आता है। कुछ और आगे चलने पर माता का भवन दिखाई देने लगता है। माता के मंदिर मे
            प्रवेश करने से पहले श्रध्दालु पंक्ति मे लग जाते हैं और सीढिया चढकर माता के भवन मे पहुंच जाते हैं। माता के गर्भगृह मे माता शाकम्भरी देवी
            दाहिने भीमा, भ्रामरी और बाल गणेश तथा बायें और शताक्षी देवी की प्रतिमा विराजमान है। ये प्रतिमाएँ काफी प्राचीन है। लेकिन माता
            शाकम्भरी देवी की प्रतिमा अधिक प्राचीन है बाकी प्रतिमाओं को आदिगुरु शंकराचार्य जी ने स्थापित किया था। मंदिर की परिक्रमा मे कई
            देवी-देवताओ के लघु मंदिर बने हुए हैं।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            माता का मंदिर चारों और से पहाडियों से घिरा हुआ है जिनकी ऊंचाई 500 से800 मीटर तक है। इस क्षेत्र मे बेर, बेलपत्र, सराल, तुरड,
            महव्वा,आंवला,तेंदू, कढाई, शीशम, खैर, सराल, आम, जामुन, डैक,अमलतास, पलाश,नीम, सांगवान, साल आदि के पेड़ अत्यधिक पाये जाते है।
            इसके अतिरिक्त शिवालिक की ये पहाडियां आयुर्वेद औषधियों से परिपूर्ण है।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            इस क्षेत्र मे बंदर, काले मुंह वाले लंगूर, हाथी, हिरन, चित्तल, जंगली बकरे, मुर्गे, तोते, सेह, बलाई, लोमडे, गुलदार, माहें, तेंदुए आदि
            वन्य जीव निवास करते हैं। शाकम्भरी देवी सिद्धपीठ के उत्तर की और सात किमी दूर सहंस्रा ठाकुर धाम है जोकि प्राकृतिक आभा से परिपूर्ण
            है। सहंस्रा ठाकुर के पास ही प्राचीन गौतम ऋषि की गुफा, सुर्यकुंड आदि पवित्र स्थान है।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            शाकम्भरी देवी मंदिर के पास ही माता छिन्नमस्ता देवी और मनसा देवी का संयुक्त मंदिर है। माता छिन्नमस्ता का मंदिर चार शिव मंदिरों
            के बीच मे है पूर्व मे कमलेश्वर महादेव,पश्चिम मे शाकेश्वर महादेव, उत्तर मे वटुकेश्वर महादेव और दक्षिण मे इन्दरेश्वर महादेव के मंदिर है।
            माता शाकम्भरी देवी के मंदिर से एक फर्लांग आगे पहाडियों के बीच प्राचीन रक्तदंतिका देवी का मंदिर है जिसका जीर्णोद्धार 1968 के
            लगभग मे हुआ था। रक्तदंतिका मंदिर से कुछ आगे महाकाली की प्राचीन गुफा भी है।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            माता शाकंभरी देवी मंदिर के बारे में मान्यता है कि नवरात्र की चतुर्दशी पर यहां शेर भी शीश नवाने के लिए आता था। जब माता का शेर
            यहां शीश नवाने के लिए आता था तब सभी भक्त रास्ता छोड़ देते थे और शेर शीश नवाकर चुपचाप चला जाता था। आज आसपास आबादी होने की
            वजह से शेर तो नही आता लेकिन शेर के आने के आने के प्रमाण जरूर मिलते हैं।
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            इस मंदिर के बारे में ऐसी भी धारणा है कि इस मंदिर परिक्षेत्र में तेल से कोई भी खाद्य पदार्थ नहीं बनाया जाता था अगर कोई भूलवश भी
            तेल से खाद्य पदार्थ बनाने की कोशिश भी करता था तो उसकी दुकान में आग लग जाती थी इसलिए यहां पर सभी भोजन सामग्री घी से बनाई
            जाती थी।
          </p>
        </div>
      </main>
    </div>
  )
}


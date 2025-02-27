import Image from "next/image"
import { Flower } from "lucide-react"

const AartiPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4 py-8">
        {/* Main content wrapper */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Text content - Left side */}
          <div className="w-full lg:w-1/2">
            <header className="text-center lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                माता शाकम्भरी देवी, माँ भीमा देवी, भ्रामरी देवी और माता शताक्षी
              </h1>

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Flower className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">।। जय माँ शाकम्भरी देवी ।।</h2>
                <Flower className="h-5 w-5 text-yellow-400" />
              </div>
            </header>

            {/* Aarti verses */}
            <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-center backdrop-blur-sm lg:text-left">
              <div className="text-lg font-medium text-yellow-100"></div>

              <div className="space-y-4 text-gray-200">
                <p>
                हरि ॐ श्री शाकुम्भरी अम्बाजी की आरती कीजो
                  <br />
                  ऐसी अद्भुत रूप हृदय धर लीजो
                </p>

                <p>
                शताक्षी दयालु की आरती कीजो
                  <br />
                  तुम परिपूर्ण आदि भवानी मां, सब घट तुम आप बखानी मां</p>
                <p>
                  तुम्हीं हो शाकुम्भर, तुम ही हो सताक्षी मां
                  <br />
                  शिवमूर्ति माया प्रकाशी मां,
                  <br />
                  शाकुम्भरी अम्बाजी की आरती कीजो
                </p>

                <p>
                  नित जो नर-नारी अम्बे आरती गावे मां
                  <br />
                  इच्छा पूर्ण कीजो, शाकुम्भर दर्शन पावे मां
                  <br />
                  शाकुम्भरी अम्बाजी की आरती कीजो
                </p>

                <p>
                  जो नर आरती पढ़े पढ़ावे मां, जो नर आरती सुनावे मां
                  <br />
                  बस बैकुंठ शाकुम्भर दर्शन पावे
                  <br />
                  शाकुम्भरी अंबाजी की आरती कीजो।
                </p>
              </div>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="relative w-full lg:w-5/12">
            <div className="sticky top-8 aspect-square w-full overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="/aarti.png"
                  alt="माता शाकम्भरी देवी"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AartiPage


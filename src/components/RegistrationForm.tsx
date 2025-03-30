"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

// Sample data for dropdowns
const countries = [
  { label: "India", value: "india" },
//   { label: "United States", value: "us" },
//   { label: "United Kingdom", value: "uk" },
//   { label: "Canada", value: "canada" },
//   { label: "Australia", value: "australia" },
//   { label: "Germany", value: "germany" },
//   { label: "France", value: "france" },
//   { label: "Japan", value: "japan" },
//   { label: "China", value: "china" },
//   { label: "Brazil", value: "brazil" },
]

// const indianCities = [
//     { label: "Delhi", value: "delhi" },
//     { label: "Mumbai", value: "mumbai" },
//     { label: "Bangalore", value: "bangalore" },
//     { label: "Chennai", value: "chennai" },
//     { label: "Kolkata", value: "kolkata" },
//     { label: "Hyderabad", value: "hyderabad" },
//     { label: "Pune", value: "pune" },
//     { label: "Ahmedabad", value: "ahmedabad" },
//     { label: "Jaipur", value: "jaipur" },
//     { label: "Lucknow", value: "lucknow" },
//     { label: "Surat", value: "surat" },
//     { label: "Kanpur", value: "kanpur" },
//     { label: "Nagpur", value: "nagpur" },
//     { label: "Indore", value: "indore" },
//     { label: "Bhopal", value: "bhopal" },
//     { label: "Ludhiana", value: "ludhiana" },
//     { label: "Agra", value: "agra" },
//     { label: "Varanasi", value: "varanasi" },
//     { label: "Patna", value: "patna" },
//     { label: "Nashik", value: "nashik" },
//     { label: "Vadodara", value: "vadodara" },
//     { label: "Meerut", value: "meerut" },
//     { label: "Rajkot", value: "rajkot" },
//     { label: "Jodhpur", value: "jodhpur" },
//     { label: "Coimbatore", value: "coimbatore" },
//     { label: "Madurai", value: "madurai" },
//     { label: "Thiruvananthapuram", value: "thiruvananthapuram" },
//     { label: "Visakhapatnam", value: "visakhapatnam" },
//     { label: "Guwahati", value: "guwahati" },
//     { label: "Chandigarh", value: "chandigarh" },
//     { label: "Amritsar", value: "amritsar" },
//     { label: "Ranchi", value: "ranchi" },
//     { label: "Bhubaneswar", value: "bhubaneswar" },
//     { label: "Dehradun", value: "dehradun" },
//     { label: "Shimla", value: "shimla" },
//     { label: "Gangtok", value: "gangtok" },
//     { label: "Itanagar", value: "itanagar" },
//     { label: "Shillong", value: "shillong" },
//     { label: "Aizawl", value: "aizawl" },
//     { label: "Imphal", value: "imphal" },
//     { label: "Kohima", value: "kohima" },
//     { label: "Panaji", value: "panaji" },
//     { label: "Pondicherry", value: "pondicherry" },
//     { label: "Silchar", value: "silchar" },
//     { label: "Gwalior", value: "gwalior" },
//     { label: "Jammu", value: "jammu" },
//     { label: "Srinagar", value: "srinagar" },
//     { label: "Udaipur", value: "udaipur" },
//     { label: "Mysore", value: "mysore" },
//     { label: "Tiruchirappalli", value: "tiruchirappalli" },
//     { label: "Bareilly", value: "bareilly" },
//     { label: "Jamshedpur", value: "jamshedpur" },
//     { label: "Cuttack", value: "cuttack" },
//     { label: "Dhanbad", value: "dhanbad" },
//     { label: "Allahabad", value: "allahabad" },
//     { label: "Noida", value: "noida" },
//     { label: "Gurgaon", value: "gurgaon" },
//     { label: "Faridabad", value: "faridabad" },
//     { label: "Ghaziabad", value: "ghaziabad" }
//   ];

  const indianStates = [
    { label: "Andhra Pradesh", value: "andhra_pradesh" },
    { label: "Arunachal Pradesh", value: "arunachal_pradesh" },
    { label: "Assam", value: "assam" },
    { label: "Bihar", value: "bihar" },
    { label: "Chhattisgarh", value: "chhattisgarh" },
    { label: "Goa", value: "goa" },
    { label: "Gujarat", value: "gujarat" },
    { label: "Haryana", value: "haryana" },
    { label: "Himachal Pradesh", value: "himachal_pradesh" },
    { label: "Jharkhand", value: "jharkhand" },
    { label: "Karnataka", value: "karnataka" },
    { label: "Kerala", value: "kerala" },
    { label: "Madhya Pradesh", value: "madhya_pradesh" },
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Manipur", value: "manipur" },
    { label: "Meghalaya", value: "meghalaya" },
    { label: "Mizoram", value: "mizoram" },
    { label: "Nagaland", value: "nagaland" },
    { label: "Odisha", value: "odisha" },
    { label: "Punjab", value: "punjab" },
    { label: "Rajasthan", value: "rajasthan" },
    { label: "Sikkim", value: "sikkim" },
    { label: "Tamil Nadu", value: "tamil_nadu" },
    { label: "Telangana", value: "telangana" },
    { label: "Tripura", value: "tripura" },
    { label: "Uttar Pradesh", value: "uttar_pradesh" },
    { label: "Uttarakhand", value: "uttarakhand" },
    { label: "West Bengal", value: "west_bengal" },
    { label: "Andaman and Nicobar Islands", value: "andaman_nicobar" },
    { label: "Chandigarh", value: "chandigarh" },
    { label: "Dadra and Nagar Haveli and Daman and Diu", value: "dadra_nagar_haveli_daman_diu" },
    { label: "Delhi", value: "delhi" },
    { label: "Jammu and Kashmir", value: "jammu_kashmir" },
    { label: "Ladakh", value: "ladakh" },
    { label: "Lakshadweep", value: "lakshadweep" },
    { label: "Puducherry", value: "puducherry" },
  ];
  
  

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  city: z.string({
    required_error: "Please select a city.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  country: z.string({
    required_error: "Please select a country.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  youtubeLink: z
    .string()
    .url({
      message: "Please enter a valid YouTube URL.",
    })
    .or(z.literal("")),
})

export default function RegistrationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      address: "",
      youtubeLink: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering with us.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...field}
                    className="bg-white/20 text-white placeholder:text-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className="bg-white/20 text-white placeholder:text-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country Dropdown */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white">Country</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between bg-white/20 text-white placeholder:text-gray-300",
                          !field.value && "text-gray-300",
                        )}
                      >
                        {field.value
                          ? countries.find((country) => country.value === field.value)?.label
                          : "Select country"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search country..." />
                      <CommandList>
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup className="max-h-60 overflow-y-auto">
                          {countries.map((country) => (
                            <CommandItem
                              key={country.value}
                              value={country.value}
                              onSelect={() => {
                                form.setValue("country", country.value)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  country.value === field.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {country.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

        

       {/* State Dropdown */}
<FormField
  control={form.control}
  name="state"
  render={({ field }) => (
    <FormItem className="flex flex-col">
      <FormLabel className="text-white">State</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "justify-between bg-white/20 text-white placeholder:text-gray-300",
                !field.value && "text-gray-300",
              )}
            >
              {field.value ? indianStates.find((state) => state.value === field.value)?.label : "Select state"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search state..." />
            <CommandList>
              <CommandEmpty>No state found.</CommandEmpty>
              <CommandGroup className="max-h-60 overflow-y-auto">
                {indianStates.map((state) => (
                  <CommandItem
                    key={state.value}
                    value={state.value}
                    onSelect={() => {
                      form.setValue("state", state.value)
                    }}
                  >
                    <Check
                      className={cn("mr-2 h-4 w-4", state.value === field.value ? "opacity-100" : "opacity-0")}
                    />
                    {state.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  )}
/>

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    className="bg-white/20 text-white placeholder:text-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Address Field */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your full address"
                  {...field}
                  className="bg-white/20 text-white placeholder:text-gray-300 min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* YouTube Link Field */}
        <FormField
          control={form.control}
          name="youtubeLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">YouTube Video Link</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://www.youtube.com/watch?v=..."
                  {...field}
                  className="bg-white/20 text-white placeholder:text-gray-300"
                />
              </FormControl>
              <FormDescription className="text-gray-300">
                Share a YouTube video link related to your submission 
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Submit Registration
        </Button>
      </form>
    </Form>
  )
}


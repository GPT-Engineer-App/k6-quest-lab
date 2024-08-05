import { useState } from 'react';
import { Paw, Heart, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DogBreeds = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'French Bulldog', 'Bulldog', 'Poodle'].map((breed) => (
      <Card key={breed}>
        <CardHeader>
          <CardTitle>{breed}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={`https://source.unsplash.com/400x300/?${breed.toLowerCase().replace(' ', '-')}`} alt={breed} className="w-full h-48 object-cover rounded-md mb-2" />
          <p className="text-sm text-gray-600">A popular and beloved dog breed known for its friendly nature and versatility.</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const FunFacts = () => (
  <ul className="list-disc pl-5 space-y-2">
    <li>Dogs have a sense of time and can tell how long you've been gone.</li>
    <li>A dog's nose print is unique, much like a human's fingerprint.</li>
    <li>Dalmatians are born completely white and develop their spots as they grow older.</li>
    <li>The Basenji is the only breed of dog that can't bark, but they can yodel!</li>
    <li>A dog's average body temperature is 101.2°F (38.4°C).</li>
  </ul>
);

const CareTips = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Essential Dog Care Tips:</h3>
    <ul className="list-disc pl-5 space-y-2">
      <li>Provide a balanced diet appropriate for your dog's age, size, and activity level.</li>
      <li>Ensure your dog gets regular exercise through walks, playtime, and activities.</li>
      <li>Schedule regular check-ups with a veterinarian for vaccinations and health screenings.</li>
      <li>Groom your dog regularly, including brushing their coat and teeth.</li>
      <li>Offer mental stimulation through training, puzzles, and interactive toys.</li>
    </ul>
  </div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Dogs</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breeds"><Paw className="mr-2 h-4 w-4" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts"><Info className="mr-2 h-4 w-4" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care"><Heart className="mr-2 h-4 w-4" /> Care Tips</TabsTrigger>
          </TabsList>
          <TabsContent value="breeds" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Dog Breeds</CardTitle>
                <CardDescription>Explore some of the most beloved dog breeds</CardDescription>
              </CardHeader>
              <CardContent>
                <DogBreeds />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="facts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Fun Dog Facts</CardTitle>
                <CardDescription>Interesting tidbits about our canine companions</CardDescription>
              </CardHeader>
              <CardContent>
                <FunFacts />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="care" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Dog Care Tips</CardTitle>
                <CardDescription>Essential advice for keeping your dog happy and healthy</CardDescription>
              </CardHeader>
              <CardContent>
                <CareTips />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

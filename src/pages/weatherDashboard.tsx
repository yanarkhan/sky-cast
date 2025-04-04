import { AlertCircle, MapPin, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/button";
import { useGeolocation } from "../hooks/useGeolocation";
import WeatherSkeleton from "../components/loadingSkeleton";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { useWeatherQuery } from "../hooks/useWeatherQuery";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();
  const weatherQuery = useWeatherQuery(coordinates);
  console.log(weatherQuery.data);

  const handleRefresh = () => {
    getLocation();
  };

  if (locationLoading) {
    return <WeatherSkeleton />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 size-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable location access to see your local weather.</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 size-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <section className="space-y-4">
      {/* Fav Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant={"outline"} size={"icon"} onClick={handleRefresh}>
          <RefreshCw className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default WeatherDashboard;

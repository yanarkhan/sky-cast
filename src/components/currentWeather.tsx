import { GeocodingResponse, WeatherData } from "../api/types";
import { Card, CardContent } from "./ui/card";

interface CurrentWeatherProps {
  data: WeatherData;
  location?: GeocodingResponse;
}

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather: [currentWeather],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;
  return (
    <section>
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <main className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-end gap-1">
                  <h2 className="text-2xl font-bold tracking-tighter">
                    {locationName?.name}
                  </h2>
                  {locationName?.state && (
                    <span className="text-muted-foreground">
                      , {locationName.state}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">
                  {locationName?.country}
                </p>
              </div>
            </main>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CurrentWeather;

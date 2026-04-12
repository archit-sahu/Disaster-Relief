import { AlertTriangle, MapPin, Clock } from "lucide-react";

const activeAlerts = [
  {
    type: "Flood Warning",
    location: "Coastal District",
    severity: "High",
    time: "2 hours ago",
  },
  {
    type: "Cyclone Alert",
    location: "Eastern Region",
    severity: "Critical",
    time: "30 mins ago",
  },
  {
    type: "Earthquake Advisory",
    location: "Northern Zone",
    severity: "Medium",
    time: "1 hour ago",
  },
];

const EmergencyBanner = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emergency text-emergency-foreground px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            <span className="font-bold">Active Emergency Alerts</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground">
            Current Disaster Situations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activeAlerts.map((alert, index) => (
            <div
              key={index}
              className={`card-emergency bg-primary-foreground/5 backdrop-blur-sm p-5 ${
                alert.severity === "Critical" ? "border-l-emergency animate-pulse-slow" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`badge-${alert.severity === "Critical" ? "urgent" : alert.severity === "High" ? "pending" : "active"}`}>
                  {alert.severity}
                </span>
                <div className="flex items-center gap-1 text-primary-foreground/60 text-sm">
                  <Clock className="w-3 h-3" />
                  {alert.time}
                </div>
              </div>
              
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2">
                {alert.type}
              </h3>
              
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>{alert.location}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-primary-foreground/70 mt-8 text-sm">
          Last updated: {new Date().toLocaleString()} • Updates every 15 minutes
        </p>
      </div>
    </section>
  );
};

export default EmergencyBanner;

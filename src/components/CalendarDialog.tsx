import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CalendarDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalendarDialog = ({ open, onOpenChange }: CalendarDialogProps) => {
  // You can replace this URL with your actual calendar booking service
  // Popular options: Calendly, Cal.com, etc.
  // Example Calendly URL format: https://calendly.com/your-username/30min
  // Example Cal.com URL format: https://cal.com/your-username/30min
  const calendarUrl = import.meta.env.VITE_CALENDAR_URL || 
    "https://calendly.com/your-username/30min"; // Default placeholder - replace with your actual calendar URL

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] p-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 flex-shrink-0">
          <DialogTitle>Schedule a Meeting</DialogTitle>
          <DialogDescription>
            Select a date and time that works best for you
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-hidden px-6 pb-6 min-h-0">
          <iframe
            src={calendarUrl}
            className="w-full h-full min-h-[600px] border-0 rounded-lg"
            title="Calendar Booking"
            allow="camera; microphone; geolocation"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};


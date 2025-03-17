import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardComp() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Isi Data berikut</CardTitle>
        <CardDescription>Silahkan isi data dengan teliti.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="firstName">Nama Depan</Label>
              <Input id="name" placeholder="Name Depan" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lastName">Nama Belakang</Label>
              <Input id="name" placeholder="Nama Belakang" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phoneNumber">Nomor Hp</Label>
              <Input id="name" placeholder="Nomor HP" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="idNumber">NIK</Label>
              <Input id="name" placeholder="NIK" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Alamat</Label>
              <Input id="name" placeholder="Alamat" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="golongan">Golongan</Label>
              <Input id="name" placeholder="Golongan" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="gender">Jenis Kelamin</Label>
              <Select>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Pilih" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="pria">Pria</SelectItem>
                  <SelectItem value="wanita">Wanita</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-between gap-10">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Pilih excel kamu untuk input otomatis</Label>
          <Input id="xlsx/csv" type="file" />
        </div>
        <div className="flex w-full justify-between">
          <Button variant="outline">Batal</Button>
          <Button>Kirim</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

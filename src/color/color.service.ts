import { Injectable } from "@nestjs/common";
import { Color } from "src/interface/color.interface";

@Injectable()
export class ColorService {
    public colors: Color[] = []
    findAll(): Color[] {
         return this.colors
    }
    findOne(id: number) {
        return this.colors.filter(item => item.id == id);
    }
    create(color: Color) {
        this.colors.push(color)
    }
    remove(id: number) {
        this.colors = this.colors.filter(item => item.id !== id);
    }
    update(id: number, color: Color) {
        this.colors = this.colors.map(item => {
            if (item.id = id) {
                return color
            } else {
                return item
            }
        })
    }
}
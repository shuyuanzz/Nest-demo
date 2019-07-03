import { Controller, Get, Post, Body, Delete, Param, Put } from "@nestjs/common";
import { async } from "rxjs/internal/scheduler/async";
import { ColorService } from "./color.service";

@Controller('color')
export class ColorController {
    constructor(private readonly colorService: ColorService) {

    }
    @Get()
    async findAll(): Promise<any[]> {
        return this.colorService.findAll()
    }
    @Get('id')
    async findOne(@Param('id') id: number) {
        return this.colorService.findOne(id)
    }
    @Post()
    async create(@Body() body) {
        this.colorService.create(body);
    }
    @Delete()
    async remove(@Param('id') id: number) {
        this.colorService.remove;
    }
    @Put('id')
    async update(@Param('id') id: number, @Body() body) {
        this.colorService.remove;
    }
}

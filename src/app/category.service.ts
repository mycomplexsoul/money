import { Category } from './category.type';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
    private data: Array<Category> = [];
    private storage: StorageService = null;
    private config = {
        storageKey: 'categories'
        , defaultUser: 'anon'
    }

    constructor(storage: StorageService){
        this.storage = storage;
    }

    initialData(){
        let list: Array<Category>;
        
        let data = [{
            mct_id: '1'
            , mct_name: 'Capital'
        },{
            mct_id: '2'
            , mct_name: 'Mosho Cartera'
        },{
            mct_id: '3'
            , mct_name: 'Mosho Libreton'
        },{
            mct_id: '4'
            , mct_name: 'Mosho Nomina'
        },{
            mct_id: '5'
            , mct_name: 'Mosho Credito'
        },{
            mct_id: '6'
            , mct_name: 'Mosho Puntos'
        },{
            mct_id: '7'
            , mct_name: 'Mosho Santander'
        },{
            mct_id: '8'
            , mct_name: 'Hipoteca'
        },{
            mct_id: '9'
            , mct_name: 'Mosho Inversion'
        },{
            mct_id: '10'
            , mct_name: 'Prestamos Mosho a Otros'
        },{
            mct_id: '11'
            , mct_name: 'Prestamos Mosho a Lau'
        },{
            mct_id: '12'
            , mct_name: 'Prestamos Mosho a Oliva'
        },{
            mct_id: '13'
            , mct_name: 'Prestamos Mosho a Memo'
        },{
            mct_id: '14'
            , mct_name: 'Revolvente Moshos'
        },{
            mct_id: '15'
            , mct_name: 'LPHT Nom Bancomer'
        },{
            mct_id: '16'
            , mct_name: 'LPHT Deb Bancomer'
        },{
            mct_id: '17'
            , mct_name: 'LPHT Deb Banamex'
        },{
            mct_id: '18'
            , mct_name: 'LPHT Cred Banamex'
        },{
            mct_id: '19'
            , mct_name: 'LPHT Cartera'
        },{
            mct_id: '20'
            , mct_name: 'Prestamos Lau a MamaAgüis'
        },{
            mct_id: '21'
            , mct_name: 'Prestamos Lau a Hermano'
        },{
            mct_id: '22'
            , mct_name: 'Fondo de Reserva CV'
        },{
            mct_id: '23'
            , mct_name: 'Adeudo a FR'
        },{
            mct_id: '24'
            , mct_name: 'Prestamos FR a Mosho'
        },{
            mct_id: '25'
            , mct_name: 'Capital CV'
        }];
        
        list = data.map((d: any) => {
            d.mct_user = this.config.defaultUser;
            return new Category(d);
        });

        return list;
    }

    getAll(){
        let fromStorage = this.storage.get(this.config.storageKey);
        if (fromStorage){
            this.data = JSON.parse(fromStorage);
        } else {
            this.data = this.initialData();
        }
        return this.data;
    }

    getAllForUser(user: string){
        const all: Array<Category> = this.getAll();

        return all.filter((x: Category) => x.mct_user === user);
    }
}
(() => {
    interface Client {
        name: string,
        age: number,
        address: Address,
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Loreliz',
        age: 28,
        address: {
            id: 1,
            zip: 'HSKA-34',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Malu',
        age: 25,
        address: {
            id: 2,
            zip: 'HSKA-AS2',
            city: 'Toronto'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }
})()
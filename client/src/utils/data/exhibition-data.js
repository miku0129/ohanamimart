const EXHIBITIONS_DATA = {
  exhibitions: [
    {
      id: 0,
      exhibition_title: "Mini Expo Japonaise",
      start_date: "2023/8/27",
      end_date: "2023/8/27",
      start_time: "10:00-18:00",
      end_time: "10:00-18:00",
      location: "Yoïsho!",
      address: "11 Avenue de Grammont",
      exhibition_image_url: "https://i.ibb.co/jMct7KD/11256.jpg",
      exhibitors: ["SUGAR", "Tsubaki création", "GOEN"],
      about_exhibition: "",
      exhibition_url: "",
    },
    {
      id: 1,
      exhibition_title: "MARCHÉ ARTISANAL JAPON, TOURS",
      start_date: "2023/09/24",
      end_date: "2023/09/24",
      start_time: "10:30",
      end_time: "19:00",
      location: "YOÏSHO",
      address: "11, avenue Grammont Tours",
      exhibition_image_url: "https://i.ibb.co/gvSDPGH/12688.jpg",
      exhibitors: ["GOEN", "Tsubaki création", "Nami Créations"],
      about_exhibition:
        "Trois créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 2,
      exhibition_title: "MARCHÉ ARTISANAL JAPON, TOURS",
      start_date: "2023/10/22",
      end_date: "2023/10/22",
      start_time: "10:30",
      end_time: "19:00",
      location: "YOÏSHO",
      address: "11, avenue Grammont Tours",
      exhibition_image_url: "https://i.ibb.co/m5J51hG/16533.jpg",
      exhibitors: ["GOEN", "Tsubaki création", "Nami Créations"],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 3,
      exhibition_title: "MARCHÉ ARTISANAL JAPON, TOURS",
      start_date: "2023/11/19",
      end_date: "2023/11/19",
      start_time: "10:30",
      end_time: "19:00",
      location: "YOÏSHO",
      address: "11, avenue Grammont Tours",
      exhibition_image_url: "https://i.ibb.co/m5J51hG/16533.jpg",
      exhibitors: [
        "GOEN",
        "Tsubaki création",
        "Nami Créations",
        "FUMIHITO ONDA Massage",
      ],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 4,
      exhibition_title: "MARCHÉ ARTISANAL JAPON, TOURS",
      start_date: "2023/11/26",
      end_date: "2023/11/26",
      start_time: "10:30",
      end_time: "19:00",
      location: "YOÏSHO",
      address: "11, avenue Grammont Tours",
      exhibition_image_url: "https://i.ibb.co/m5J51hG/16533.jpg",
      exhibitors: [
        "GOEN",
        "Tsubaki création",
        "Nami Créations",
        "Biscuits o riz",
      ],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 5,
      exhibition_title: "Marhcé de Noël",
      start_date: "2023/12/02",
      end_date: "2023/12/02",
      start_time: "10:00",
      end_time: "17:00",
      location: "École Joules Ferry",
      address: "10 rue Germain Chauveau 37400 Amboise",
      exhibition_image_url: "https://i.ibb.co/MM3LGsn/marche-de-noel.jpg",
      exhibitors: ["GOEN", "Tsubaki création", "Nami Créations"],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 6,
      exhibition_title: "Marhcé de Noël",
      start_date: "2023/12/03",
      end_date: "2023/12/03",
      start_time: "10:00",
      end_time: "18:00",
      location: "Salle de l'ESCALE",
      address: "All. René Coulon, 37540 Saint-Cyr-sur-Loire",
      exhibition_image_url: "",
      exhibitors: ["GOEN", "Tsubaki création"],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 7,
      exhibition_title: "MARCHÉ ARTISANAL JAPON, TOURS",
      start_date: "2023/12/08",
      end_date: "2023/12/08",
      start_time: "10:00",
      end_time: "18:00",
      location: "COOP Nature Tours center",
      address: "17, Rue Chalmel Tours",
      exhibition_image_url: "https://i.ibb.co/19rRXn4/coop-nature-tours.jpg",
      exhibitors: ["GOEN", "Tsubaki création"],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 8,
      exhibition_title: "MARCHÉ ARTISANAL JAPON, TOURS",
      start_date: "2023/12/10",
      end_date: "2023/12/10",
      start_time: "10:30",
      end_time: "19:00",
      location: "YOÏSHO",
      address: "11, avenue Grammont Tours",
      exhibition_image_url: "https://i.ibb.co/pWBWL5Q/19919.jpg",
      exhibitors: ["GOEN", "Tsubaki création", "Nami Créations"],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 9,
      exhibition_title: "MARCHÉ ARTISANAL JAPON, TOURS",
      start_date: "2023/12/15",
      end_date: "2023/12/15",
      start_time: "10:00",
      end_time: "18:00",
      location: "COOP Nature Tours center",
      address: "17, Rue Chalmel Tours",
      exhibition_image_url: "https://i.ibb.co/19rRXn4/coop-nature-tours.jpg",
      exhibitors: ["GOEN", "Tsubaki création"],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
    {
      id: 10,
      exhibition_title: "MARCHÉ ARTISANAL JAPON, TOURS",
      start_date: "2023/12/17",
      end_date: "2023/12/17",
      start_time: "10:30",
      end_time: "19:00",
      location: "YOÏSHO",
      address: "11, avenue Grammont Tours",
      exhibition_image_url: "https://i.ibb.co/pWBWL5Q/19919.jpg",
      exhibitors: ["GOEN", "Tsubaki création", "Nami Créations"],
      about_exhibition:
        "Créateurs japonais vendent des produits faits à la main",
      exhibition_url: "",
    },
  ],
};

export default EXHIBITIONS_DATA;
